import baseOperation from '../core/baseOperation.mjs';

/**
 * Subtract logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {...number?} arg First number
 * @returns {number|any} Returns number for subtracted value
 * @example
 *
 * subtract(1, 1)
 * // => 0
 */
function subtract (...arg) {

    return baseOperation({
        arg,
        "operation": "subtract"
    });

}
export default subtract;

