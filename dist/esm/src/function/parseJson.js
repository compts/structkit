import strUnEscape from './strUnEscape.js';

import strSubs from './strSubs.js';

import {zero, one, negOne} from '../variable/defaultValue.js';

import varExtend from './varExtend.js';

import indexOfExist from './indexOfExist.js';

import getTypeof from './getTypeof.js';

import each from './each.js';

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
    if (defaultConfig.disableCorrection) {

        return JSON.parse(value);

    }

    try {

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
 * @param {any} str Object you want to convert to JSON string
 * @returns {string} Return JSON string
 * @example
 *
 * escapeQuotesJson("'" )
 *=>"\\'"
 */
function escapeQuotesJson (str) {

    str = str.replace(/&quot;/g, "&bsol;&quot;");

    str= str.replace(/&apos;/g, "&bsol;&quot;");
    const str_split = str.trim().split("");

    each(str_split, function (value, key) {

        if (key>zero && key<str_split.length-one) {

            if (str_split[key] === '"' && (/^\\/g).test(strSubs(str_split.join(""), key-one)) === false) {

                str_split[key] = '\\"';

            }

        }

    });

    return str_split.join("");

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

        last_str = last_str.replace(/\\/g, "");
        if (firstFindAction === "char_obj") {

            last_str = '"'+last_str.trim().replace(/['`"]$/g, '')+'"';

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
 * @param {any} ob_str String that contain the struct you want to get
 * @param {any} count Count of the current position in the string
 * @param {any} ob_type Define the type of struct you want to get, either json or array
 * @param {any} valChar Character that is being validated
 * @returns {string} Return JSON string
 * @example
 *
 * validateBacklastHasChar("'" )
 *=>"\\'"
 */
function validateBacklastHasChar (last_str, firstFindAction, lastAction, currentAction, ob_str, count, ob_type, valChar) {

    let slashValue = (/[^\\]$/g).test(last_str.trim());

    if (slashValue && firstFindAction === "qoute") {

        slashValue = false;

        if (firstFindAction === lastAction) {

            slashValue = true;

        }
        if (slashValue) {

            if ([
                "separator",
                "close_obj"
            ].indexOf(currentAction) >= zero) {

                const check_next_str = strSubs(ob_str, count+one);

                slashValue = (/[\s\r\n]{0,}[\\]["'`]{1}/g).test(check_next_str.trim());
                if (slashValue === false && check_next_str.trim().split("").length === zero) {

                    slashValue = true;

                } else {

                    const isValidCloseNonQoute = (/^[\s\r\n]{0,}["'`]{0}/g).test(check_next_str.trim());

                    if (currentAction ==="close_obj" && ob_type==="json" && valChar ==="}" && (/[\\]{0}$/g).test(last_str.trim()) && isValidCloseNonQoute) {

                        slashValue = true;

                    }

                    if (currentAction ==="close_obj" && ob_type==="array" && valChar ==="]" && (/[\\]{0}$/g).test(last_str.trim()) && isValidCloseNonQoute) {

                        slashValue = true;

                    }

                    if (slashValue === false && currentAction ==="separator" && (/[\\]{0}$/g).test(last_str.trim())) {

                        slashValue = true;

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

            const slashValue = validateBacklastHasChar(last_str, firstFindAction, lastAction, currentAction, ob_str, count, ob_type, valChar);

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
                appen_str+=last_str+str_append_last;
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
                last_str = '"';
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

    const ass = ob_str.replace(/\//g, "").split("");
    let count = 0;
    let rawCounter = 1;
    let op_c = 0;
    let structCount = 0;
    let type_c = "";

    let append_str = "";

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

            type_c = {
                "[": "array",
                "{": "json"
            }[vales];

            if (structCount > zero && (/[^:][\s\t\n]{0,}$/g).test(append_str)) {

                append_str += ",";

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

