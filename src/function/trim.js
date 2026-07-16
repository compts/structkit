const toString = require("./toString");
const trimStart = require("./trimStart");
const trimEnd = require("./trimEnd");
const getTypeof = require('./getTypeof');
const indexOfExist = require('./indexOfExist');

/**
 * String trim in removing whitespace both start and end
 *
 * @since 1.4.8
 * @category String
 * @param {string} value String data that you want to trim
 * @param {any=} remove_value Replace preferred value to remove
 * @returns {string} Returns trim data
 * @example
 *
 * trim(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss'
 */
function trim (value, remove_value) {

    let rawValue = toString(value);

    rawValue = trimStart(rawValue);
    rawValue = trimEnd(rawValue);

    rawValue = rawValue.trim();

    if (indexOfExist(getTypeof(remove_value), [
        "string",
        "regexp"
    ])) {

        rawValue = rawValue.replace(remove_value, "");

    }

    return rawValue;

}
module.exports=trim;

