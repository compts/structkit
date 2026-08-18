const baseOperation = require("../core/baseOperation");

/**
 * Multiply logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {...number?} arg First number
 * @returns {number|any} Returns number for mutiplied value
 * @example
 *
 * multiply(1, 1)
 * // => 1
 */
function multiply (...arg) {

    return baseOperation({
        arg,
        "operation": "multiply"
    });

}
module.exports=multiply;
