const has = require('./has');
const curryArg = require("../core/curryArg");

/**
 * Check if data was executed once
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} key Either JSON or array
 * @param {any=} defaultValue Check the key of value
 * @param {any=} objectValue if value not exist, this value will be return
 * @returns {any} Returns filled value from its index
 * @example
 *
 * prop('as','as2',{'as':1})
 * // => 1
 */
function once (key, defaultValue, objectValue) {

    return curryArg(function (rawKey, rawDefaultValue, rawObjectValue) {

        if (!has(value2)) {

            if (has(objectValue)) {

                return objectValue;

            }

            return value1;

        }

        if (has(objectValue, value1)) {

            return objectValue[value1];

        }

        return value2;

    }, [
        key, defaultValue, objectValue
    ]);


}
module.exports=once;

