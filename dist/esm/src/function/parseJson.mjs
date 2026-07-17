import strUnEscape from './strUnEscape.mjs';

import strSubs from './strSubs.mjs';

import {zero, one, negOne, two} from '../variable/defaultValue.mjs';

import varExtend from './varExtend.mjs';

import indexOfExist from './indexOfExist.mjs';

import getTypeof from './getTypeof.mjs';

import filter from './filter.mjs';

import toString from './toString.mjs';

const ObjOpen = {
    "[": {
        "close": "]",
        "type": "array"
    },
    "{": {
        "close": "}",
        "type": "json"
    }
};

/**
 * Parse string to JSON object with type conversion and correction
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} value Any type you want to convert to json object
 * @param {any=} config Option for parse json, it has disableCorrection to disable the correction and validation of json string, invalidDefaultValue to set default value if the string is invalid or not string and throwError to determine if it will throw error or just return default value if the string is invalid or not string
 * @returns {any} Returns the json object.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function parseJson (value, config) {

    const defaultConfig = varExtend({"disableCorrection": false,
        "invalidDefaultValue": null,
        "throwError": false}, config);

    if (getTypeof(value) !== "string") {

        if (defaultConfig.throwError) {

            throw new Error("Allow only string to parse to json");

        }

        return defaultConfig.invalidDefaultValue;

    }

    try {

        if (defaultConfig.disableCorrection) {

            return JSON.parse(value);

        }

        const stripValue = constrJson(strUnEscape(value));

        return JSON.parse(stripValue, function (__, revValue) {

            return revValue;

        });

    } catch (err) {

        if (defaultConfig.throwError) {

            throw err;

        }

        return defaultConfig.invalidDefaultValue;

    }

}

/**
 * String escape qoutes
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} lastStr Object you want to convert to JSON string
 * @returns {string} Return JSON string
 * @example
 *
 * escapeQuotesJson("'" )
 *=>"\\'"
 */
function escapeQuotesJson (lastStr) {

    const result = toString(lastStr, {"raw": true})
        .replace(/(?<!\\)\\(['`])/g, "$1")
        .replace(/\\(?=[,'`"])/g, "")
        .replace(/(?<=.)(\\{0,}?["]{1}|["])/g, '\\"');

    return result;

}

/**
 * Validate last str and add qoutes if needed
 *
 * @since 1.4.9
 * @category Collection
 * @param {boolean} validValidation Value that determine if the last str is valid and need to be added with qoutes or not
 * @param {str} firstFindAction first action that is being found in the string, either qoute, char_obj, number or none
 * @param {str} last_str last string that is being validated
 * @returns {string} Return JSON string
 * @example
 *
 * validationLastStr("'" )
 *=>"\\'"
 */
function validationLastStr (validValidation, firstFindAction, last_str) {

    if (validValidation) {

        last_str = toString(last_str, {"raw": true})
            // Normalize actual newlines and carriage returns to \n
            .replace(/\r\n|\r|\n/g, "\\n")
            // Normalize tabs to \t
            .replace(/\t/g, "\\t")
            // Replace other whitespace characters (excluding normal space) with a single space
            .replace(/[\f\v\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]+/g, " ")
            .replace(/(\\+?[n]|[\n])/g, "\\n")
            .replace(/(\\+?[s])/g, " ")
            .replace(/\\(?=[[\]{}"'`,:])/g, "")
            .replace(/\\(?![\\/"bfnrtu])/g, "");

        if (firstFindAction === "char_obj") {

            last_str = '"'+escapeQuotesJson(last_str.trim().replace(/['`"]$/g, ''))+'"';

        } else if (firstFindAction === "qoute") {

            last_str = escapeQuotesJson(last_str.trim().replace(/['`"]$/g, ''))+'"';

        } else if (firstFindAction === "number") {

            last_str = last_str.trim();

        } else {

            last_str = escapeQuotesJson(last_str.trim());

        }

    }

    return last_str;

}

/**
 * Validate last str and add slash if pass for delimiter or closing object
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} last_str Last string that is being validated
 * @param {any} firstFindAction First action that is being found in the string, either qoute, char_obj, number or none
 * @param {any} lastAction Last action that is being found in the string, either qoute, char_obj, number or none
 * @param {any} currentAction Current action that is being found in the string, either qoute, char_obj, number or none
 * @param {any} remainStr Remaining string that is being validated
 * @returns {string} Return JSON string
 * @example
 *
 * validateBacklastHasChar("'" )
 *=>"\\'"
 */
function validateBacklastHasChar (last_str, firstFindAction, lastAction, currentAction, remainStr) {

    let slashValue = (/[^\\]$/g).test(last_str.trim());

    if (slashValue && firstFindAction === "qoute") {

        slashValue = false;

        if (firstFindAction === lastAction) {

            slashValue = true;

        }
        if (slashValue) {

            if ([
                "separator",
                "close_obj",
                "open_obj"
            ].indexOf(currentAction) >= zero) {

                slashValue = false;
                const last_str_split = last_str.trim().replace(/\\"/g, "")
                    .split("");
                const countQoute = filter(function (value) {

                    return value === '"';

                }, last_str_split);

                if (last_str_split.length > zero) {

                    slashValue = last_str_split[zero] === last_str_split[last_str_split.length-one] && strSubs(last_str.trim(), last_str_split.length-two) !=='\\"';

                }

                if (countQoute.length % two !== zero && slashValue) {

                    if (remainStr !== "") {

                        slashValue = false;

                    }

                }

            }

        }

    }

    return slashValue;

}

/**
 * Get struct value and count of how many char it has
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} ob_str String that contain the struct you want to get
 * @param {any} ob_type Define the type of struct you want to get, either json or array
 * @returns {string} Return JSON string
 * @example
 *
 * escapeQuotesStr("'" )
 *=>"\\'"
 */
function getStructVal (ob_str, ob_type) {

    const ass = ob_str.split("");
    let appen_str = "";
    let last_str = "";
    let firstFindAction = "none";
    let lastAction = "none";
    let keyValType = ob_type==="json"
        ? "key"
        :"value";
    let isOpen = false;
    let count = 0;
    let rawCount = 0;
    let continue_vali = true;

    while (count< ass.length) {

        const valChar = ass[count];
        const currentAction = charType(valChar);

        if (isOpen) {

            const slashValue = validateBacklastHasChar(last_str, firstFindAction, lastAction, currentAction, strSubs(ob_str.trim(), count+one));

            let str_append_last = "";

            if (currentAction !== firstFindAction && slashValue) {

                if (firstFindAction==="number" && currentAction==="char_obj" && valChar !==",") {

                    firstFindAction = "char_obj";

                }

            }

            if (currentAction !=="none") {

                lastAction = currentAction;

            }

            if (currentAction === "open_obj" && slashValue) {

                continue_vali = true;
                count = ass.length+one;

            }
            let validValidation = false;

            if (keyValType === "key" && continue_vali === false) {

                if (valChar===":" && slashValue) {

                    last_str = last_str.replace(/\\/g, "");
                    if (firstFindAction === "qoute") {

                        last_str = last_str.trim().replace(/['`]$/g, '"')+'';

                    } else {

                        last_str = '"'+last_str.trim().replace(/['`]$/g, '')+'"';

                    }
                    rawCount +=one;

                    str_append_last=":";
                    continue_vali = true;
                    keyValType = "value";
                    validValidation = false;

                }

            }
            if (keyValType === "value" && continue_vali === false) {

                if (currentAction === "close_obj" && slashValue) {

                    keyValType = ob_type==="json"
                        ? "key"
                        :"value";
                    validValidation = true;
                    continue_vali = true;
                    isOpen = true;

                }
                if (currentAction === "separator" && slashValue) {

                    rawCount +=one;
                    str_append_last=",";
                    continue_vali = true;
                    validValidation = true;
                    keyValType = ob_type==="json"
                        ? "key"
                        :"value";

                }

            }
            last_str = validationLastStr(validValidation, firstFindAction, last_str);

            if (continue_vali) {

                isOpen = false;
                appen_str+=last_str.replace(/^[`']/, '"')+str_append_last;
                last_str = "";

            } else {

                last_str+=valChar;
                rawCount +=one;

            }

        } else {

            if ([
                "open_obj",
                "close_obj"
            ].indexOf(currentAction) >=zero) {

                count = ass.length+one;
                firstFindAction = currentAction;

            } else if (currentAction === "qoute") {

                continue_vali = false;
                rawCount +=one;
                isOpen = true;
                last_str = valChar;
                firstFindAction = currentAction;
                lastAction = "none";

            } else {

                rawCount +=one;
                if (currentAction !== "none") {

                    isOpen = true;
                    last_str = valChar;
                    continue_vali = false;
                    firstFindAction = currentAction;
                    lastAction = "none";

                }

            }

        }

        count+=one;

    }

    if ((/[,]{1,}[\s\t\n]{0,}$/g).test(appen_str)) {

        rawCount -=one;

    }

    return {
        "count": rawCount-one,
        "word": appen_str.replace(/[,]{1,}[\s\t\n]{0,}$/g, "")
    };

}

/**
 * Construct JSON string with type correction and validation
 *
 * @since 1.4.872
 * @category Collection
 * @param {any} ob_str Object you want to convert to JSON string
 * @returns {string} Return JSON string
 * @example
 *
 * constrJson("'" )
 *=>"\\'"
 */
function constrJson (ob_str) {

    const ass = ob_str
        .split("");
    let count = 0;
    let rawCounter = 1;
    let op_c = 0;
    let structCount = 0;
    let type_c = "";

    let append_str = "";
    let firstExpectedClose = "";

    while (count< ass.length) {

        const vales = ass[count];

        if (op_c >zero) {

            if (type_c !== "") {

                const cntntStr = strSubs(ob_str, count);
                const valStruct = getStructVal(cntntStr, type_c);

                append_str += valStruct.word;
                rawCounter += valStruct.count;
                structCount = rawCounter;

                if (rawCounter<=zero) {

                    structCount = zero;
                    rawCounter =one;

                }

                type_c = "";

            }

        }

        if (indexOfExist(vales, [
            "[",
            "{"
        ])) {

            type_c = ObjOpen[vales].type;
            if (op_c ===zero) {

                firstExpectedClose = ObjOpen[vales].close;

            }

            if (structCount > zero && (/[^:][\s\t\n]{0,}$/g).test(append_str)) {

                append_str += ",";

            } else {

                if (op_c>zero && (/[^:][\s\t\n]{0,}$/g).test(append_str) && (/[\s\t\n]{0,}[\]}]$/g).test(append_str)) {

                    append_str += ",";

                }

            }

            op_c +=one;
            append_str += vales;

        }

        if (indexOfExist(vales, [
            "]",
            "}"
        ])) {

            op_c -=one;

            if (op_c >=zero) {

                append_str += vales;

            }

        }

        count +=rawCounter;
        rawCounter = one;

    }

    if (op_c ===one && firstExpectedClose !== "") {

        op_c -=one;
        append_str+=firstExpectedClose;

    }

    if (op_c >zero) {

        throw new Error("Invalid JSON string");

    }

    return append_str;

}

/**
 * Get struct value and count of how many char it has
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} valChar Object you want to convert to JSON string
 * @returns {string} Return JSON string
 * @example
 *
 * charType("'" )
 *=>"\\'"
 */
function charType (valChar) {

    let currentAction = "none";

    if ([
        "[",
        '{'
    ].indexOf(valChar) >=zero) {

        currentAction = "open_obj";

    } else if ([
        "]",
        '}'
    ].indexOf(valChar) >=zero) {

        currentAction = "close_obj";

    } else if ([","].indexOf(valChar) >=zero) {

        currentAction = "separator";

    } else if ([
        "'",
        '"',
        '`'
    ].indexOf(valChar) >=zero) {

        currentAction = "qoute";

    } else if ((/[0-9]/g).test(valChar)) {

        currentAction = "number";

    } else if ([
        "'",
        '"',
        '`'
    ].indexOf(valChar) === negOne && (/[\s\t\t]/g).test(valChar) ===false) {

        currentAction = "char_obj";

    } else {

        currentAction = "none";

    }

    return currentAction;

}

export default parseJson;

