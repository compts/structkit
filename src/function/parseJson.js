const stringUnEscape = require('./stringUnEscape');
const each = require('./each');
const {two, one, zero} = require("../core/defaultValue");
const varExtend = require('./varExtend');


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

    return refValue;

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
 * @param {any} values The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function encodeStripValueQoute (values) {

    let str_call = "";
    let reserv_str = "";
    const arg_call_list = [];

    let str_type = "";

    each(values.split(""), function (key, value) {

        const value_indx=value;

        let row_str_type = "-";

        if (value_indx === '"') {

            row_str_type = "double_qoute";

        }
        if (value_indx === "'") {

            row_str_type = "single_qoute";

        }
        if (str_type === "") {

            // eslint-disable-next-line no-negated-condition
            if (row_str_type !== '-') {

                str_type = row_str_type;
                str_call += "#@"+arg_call_list.length+"@#";

            } else {

                str_call += value_indx;

            }

        } else {

            if (row_str_type ==="-") {

                reserv_str += value_indx;

            }

            if (str_type === row_str_type) {

                arg_call_list.push({
                    "arg": reserv_str,
                    "qoute_type": str_type
                });
                str_type = "";
                reserv_str = "";

            }

        }

    });

    return {
        arg_call_list,
        str_call
    };

}


/**
 * Parse Json object
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} str_call String you want to convert to
 * @param {any} arg_call_list The second number in an addition.
 * @param {boolean} keyOnly The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function decodeStripValueQoute (str_call, arg_call_list, keyOnly) {

    let count = 0;

    let repl= str_call.replace(/#@([0-9]{1,})@#/gi, function (__, va1) {

        const getObj = arg_call_list[va1];

        count +=one;

        return '"'+ getObj.arg +'"';

    });

    if (count===zero && keyOnly) {

        repl = '"'+repl+'"';

    }

    return repl;

}

/**
 * Parse Json object
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} glb String you want to convert to
 * @param {any} config The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function callbackParse (glb, config) {

    if (glb.type === 'json') {

        const encodeStr = encodeStripValueQoute(glb.ret_value, config);

        const splitKeyValue = encodeStr.str_call.split(":");

        if (splitKeyValue.length <two) {

            throw new Error("No Key found");

        }

        const reviewSubValue = getTagVal(decodeStripValueQoute(cleanValue(splitKeyValue.splice(one).join(": ")), encodeStr.arg_call_list, false));

        if (reviewSubValue.type !== "none") {

            return glb.tag_open+decodeStripValueQoute(cleanValue(splitKeyValue[zero]), encodeStr.arg_call_list, true)+": "+callbackParse(reviewSubValue, config) +glb.tag_close;

        }

        const valueSplit = encodeStr.str_call.split(",");

        const list_obj = [];

        each(valueSplit, function (key, value) {

            const value_split = value.split(":");

            if (value_split.length <two) {

                throw new Error("No Key found");

            }
            const argValueJoin =value_split.splice(one).join(": ");
            const objSubVal = decodeStripValueQoute(cleanValue(argValueJoin), encodeStr.arg_call_list, false);
            const tagVal = getTagVal(objSubVal);


            if (tagVal.type === 'none') {

                list_obj.push(decodeStripValueQoute(cleanValue(value_split[zero]), encodeStr.arg_call_list, true).toString()+ ": "+ objSubVal);

            } else {

                list_obj.push(decodeStripValueQoute(cleanValue(value_split[zero]), encodeStr.arg_call_list, true).toString()+ ": "+ callbackParse(tagVal, config));

            }


        });


        return glb.tag_open+ list_obj.join(", ") +glb.tag_close;

    }

    if (glb.type === 'array') {

        const encodeStr = encodeStripValueQoute(glb.ret_value, config);

        const valueSplit = encodeStr.str_call.split(",");

        const reviewSubValue = getTagVal(glb.ret_value);

        if (reviewSubValue.type !== "none") {

            return glb.tag_open+callbackParse(reviewSubValue, config) +glb.tag_close;

        }

        const list_obj = [];

        each(valueSplit, function (key, value) {

            const objSubVal = decodeStripValueQoute(cleanValue(value), encodeStr.arg_call_list, false);
            const tagVal = getTagVal(objSubVal);

            if (tagVal.type === 'none') {

                list_obj.push(objSubVal);

            } else {

                list_obj.push(callbackParse(tagVal, config));

            }

        });


        return glb.tag_open+ list_obj.join(", ") +glb.tag_close;

    }

    return "";

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

    const defaultConfig = varExtend(config, {});

    const stripValue=cleanValue(stringUnEscape(value));

    const tagVal = getTagVal(stripValue);

    const obgM = callbackParse(tagVal, defaultConfig);

    if (obgM === "") {

        return null;

    }
    const dataObj = JSON.parse(obgM);

    return dataObj;


}
module.exports=parseJson;
