const toString = require("./toString");

/**
 * String trim
 *
 * @since 1.4.8
 * @category String
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * trim(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss'
 */
function trim (value) {

    return toString(value).trim();

}
module.exports=trim;

