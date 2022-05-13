const has = require('./has');
const getTypeof = require('./getTypeof');
const stringSplit = require("../core/stringSplit");

/**
 * String Snake case
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * stringSnakeCase('the fish is goad   with goat-1ss')
 *=> 'the_fish_is_goad_with_goat_1ss'
 */
function stringSnakeCase (value) {

    if (has(value) === false && getTypeof(value) !=="string") {

        return "";

    }

    return stringSplit(value)
        .split(" ")
        .join("_");

}
module.exports=stringSnakeCase;

