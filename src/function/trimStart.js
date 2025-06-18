const toString = require("./toString");
const {whitespace} = require("../variable/htmlentity");
const getTypeof = require('./getTypeof');
const indexOfExist = require('./indexOfExist');

/**
 * String trim  at the end only
 *
 * @since 1.4.86
 * @category String
 * @param {string} value String data that you want to trim
 * @param {any=} remove_value Replace preferred value to remove
 * @returns {string} Returns trim data in start of string
 * @example
 *
 * trimStart(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss '
 */
function trimStart (value, remove_value) {

    const rx = new RegExp('^[' + whitespace + ']*');

    let rawValue = toString(value).replace(rx, "");

    if (indexOfExist([
        "string",
        "regexp"
    ], getTypeof(remove_value))) {

        rawValue = rawValue.replace(remove_value, "");

    }

    return rawValue;

}
module.exports=trimStart;

