const stringSplit = require("../core/stringSplit");
const toString = require("./toString");

/**
 * String Snake case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns Snake sting data
 * @example
 *
 * strSnake('the fish is goad   with goat-1ss')
 *=> 'the_fish_is_goad_with_goat_1ss'
 */
function strSnake (value) {

    return stringSplit(toString(value))
        .split(" ")
        .join("_");

}
module.exports=strSnake;
