import baseOperation from '../core/baseOperation.mjs';

/**
 * Divide logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {...number?} arg First number
 * @returns {number|any} Returns number for divided value
 * @example
 *
 * divide(1, 1)
 * // => 1
 */
function divide (...arg) {

    return baseOperation({
        arg,
        "operation": "divide"
    });

}
export default divide;

