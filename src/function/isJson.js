const has = require('./has');
const {objectCallType} = require("../variable/types");
const {zero} = require("../core/defaultValue");


/**
 * Is Json valid
 *
 * @since 1.3.1
 * @category Seq
 * @param {string|object|array} value Value you want to check JSON is Valid
 * @param {string=} valueType Get value type
 * @returns {any} Returns true or false if valid json format
 * @example
 *
 * isJson('{}' )
 *=> true
 */
function isJson (value, valueType) {

    const getValueType = Object.prototype.toString.call(value);

    if (has(objectCallType, getValueType) === false) {

        return false;

    }

    let getValueTypeRef = objectCallType[getValueType];

    if (has(valueType)) {

        getValueTypeRef = valueType;

    }

    if (getValueTypeRef === "string") {

        const stripValue=value.replace(/(&quot;)/gi, '"', value).replace(/(&nbsp;)/gi, ' ', value);

        return (/^[\],:{}\s]*$/).test(stripValue.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
            .replace(/(?:^|:|,)(?:\s*\[)+/g, ''));

    }

    if (getValueTypeRef === "object") {

        try {

            return checkIfFunctionNotExistObject(value);

        } catch (err) {

            return false;

        }

    }

    return false;

}

/**
 * Check if object has no function
 *
 * @since 1.3.1
 * @category Seq
 * @param {array|object} obj String you want to convert to JSON
 * @returns {any} Returns the total.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function checkIfFunctionNotExistObject (obj) {

    const getValueType = Object.prototype.toString.call(obj);

    if (getValueType === "[object Function]") {

        throw new Error("Function must not exist");

    }

    let isValid = false;

    if (getValueType === "[object Object]") {

        isValid = true;

    }

    if (getValueType === "[object Array]") {

        if (obj.length === zero) {

            return true;

        }

        isValid = true;

    }
    if (isValid) {

        for (const key in obj) {

            if (has(obj, key)) {

                checkIfFunctionNotExistObject(obj[key]);

            }

        }

    }

    return true;

}
module.exports=isJson;

