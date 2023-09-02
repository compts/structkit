const toString = require("./toString");

/**
 * String Lower case case
 *
 * @since 1.4.5
 * @category String
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * stringLowerCase('The fish is goad   with Goat-1ss')
 *=> 'the fish is goad   with goat-1ss
 */
function stringLowerCase (value) {

    return toString(value).toLowerCase();

}
module.exports=stringLowerCase;

