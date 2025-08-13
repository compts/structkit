import stringUnEscape from './stringUnEscape.js';

import each from './each.js';

import {one} from '../core/defaultValue.js';

import varExtend from './varExtend.js';

import indexOfExist from './indexOfExist.js';

/**
 * String escape qoutes
 *
 * @since 1.4.872
 * @category Collection
 * @param {any} str Object you want to convert to JSON string
 * @returns {string} Return JSON string
 * @example
 *
 * escapeQuotesStr("'" )
 *=>"\\'"
 */
function escapeQuotesJson (str) {

    return str.replace(/&quot;/g, "&bsol;&quot;");

}

/**
 * Cleanup unnecessary character
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} value The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function cleanValue (value) {

    let refValue = value;

    refValue = refValue.replace(/[\t\n\r\s]+$/g, "");
    refValue = refValue.replace(/^[\t\n\r\s]+/g, "");
    refValue = refValue.replace(/[,]$/g, "");

    return refValue;

}

/**
 * Clean character that will throw error to parse json
 *
 * @since 1.4.874
 * @category Collection
 * @param {any} value The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function cleanChar (value) {

    if (value === "'") {

        return '"';

    }

    return value;

}

/**
 * Parse Json object
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} value The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * getTagVal('{}' )
 *=>{}
 */
function getTagVal (value) {

    if ((/^\{/gmi).test(value) && (/\}$/).test(value)) {

        return {

            "ret_value": cleanValue(value.replace(/^\{/g, "").replace(/\}$/g, "")),
            "tag_close": "}",
            "tag_open": "{",
            "type": "json"
        };

    }
    if ((/^\[/gmi).test(value) && (/\]$/gmi).test(value)) {

        return {
            "ret_value": cleanValue(value.replace(/^\[/g, "").replace(/\]$/g, "")),
            "tag_close": "]",
            "tag_open": "[",
            "type": "array"
        };

    }

    return {
        "ret_value": "",
        "tag_close": "",
        "tag_open": "",
        "type": "none"
    };

}

/**
 * Parse Json object
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} glb String you want to convert to
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function callbackParse (glb) {

    const charList = [];
    let isOpen = false;
    let recCount = 0;
    const groupData = {};
    const lType = {
        "[": "array",
        "{": "json"
    };

    each(glb.ret_value.split(""), function (value) {

        let clnValue = value;

        if (indexOfExist([
            "{",
            "["
        ], value)) {

            isOpen =true;
            recCount +=one;
            charList.push("#$"+recCount+"$#");

            groupData[recCount] = {"type": lType[value],
                "value": clnValue};
            clnValue = "";

        }
        if (isOpen===false) {

            charList.push(cleanChar(value));

        }
        if (isOpen) {

            groupData[recCount].value +=clnValue;

        }

        if (indexOfExist([
            "}",
            "]"
        ], value)) {

            isOpen =false;

        }

    });

    const groupChart = [];

    each(charList.join("").split(","), function (value) {

        groupChart.push(cleanValue(value));

    });

    let joinGroupChart = groupChart.join(",");

    joinGroupChart = joinGroupChart.replace(/#\$([0-9]+)\$#/g, function (wh, v1) {

        const indexV1 = groupData[parseInt(v1.replace(/#\$([0-9]+)\$#/g, "$1"))];

        if (indexV1.type === "json") {

            return cleanValue(indexV1.value);

        }
        if (indexV1.type === "array") {

            return cleanValue(indexV1.value);

        }

        return null;

    });

    return joinGroupChart;

}

/**
 * Parse from String to JSON object
 *
 * @since 1.4.86
 * @category Collection
 * @param {string} value String you want to convert to json object
 * @param {any=} config Option you want to set in this function.
 * @returns {any} Returns the json object.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function parseJson (value, config) {

    const defaultConfig = varExtend({"disableCorrection": false}, config);

    if (defaultConfig.disableCorrection) {

        const rawValue = cleanValue(value);

        if (rawValue === "") {

            return null;

        }

        return JSON.parse(rawValue);

    }
    const stripValue=cleanValue(stringUnEscape(escapeQuotesJson(value)));

    const tagVal = getTagVal(stripValue);

    if (tagVal.type === 'none') {

        return null;

    }

    const obgM = callbackParse(tagVal);

    if (obgM === "") {

        return null;

    }
    const dataObj = JSON.parse(tagVal.tag_open+obgM+tagVal.tag_close, function (__, revValue) {

        return revValue;

    });

    return dataObj;

}
export default parseJson;

