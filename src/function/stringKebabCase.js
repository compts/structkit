const has = require('./has');
const getTypeof = require('./getTypeof');
const stringSplit = require("../core/stringSplit");

/**
 * String Kebab case
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value String data
 * @returns {string} Returns Kebab sting data
 * @example
 *
 * stringKebabCase('the fish is goad   with goat-1ss')
 *=> 'the-fish-is-goad-with-goat-1ss'
 */
function stringKebabCase (value) {

    if (has(value) === false && getTypeof(value) !=="string") {

        return "";

    }

    return stringSplit(value)
        .split(" ")
        .join("-");

}
module.exports=stringKebabCase;
