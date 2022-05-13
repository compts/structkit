const has = require('./has');
const getTypeof = require('./getTypeof');
const stringSplit = require("../core/stringSplit");

/**
 * String Camel case
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * stringCamelCase('the fish is goad   with goat-1ss')
 *=> 'theFishIsGoadWithGoat1ss'
 */
function stringCamelCase (value) {

    if (has(value) === false && getTypeof(value) !=="string") {

        return "";

    }

    return stringSplit(value)
        .replace(/(\s[a-z])/g, function (ss1) {

            return ss1.toUpperCase();

        })
        .split(" ")
        .join("");

}
module.exports=stringCamelCase;

