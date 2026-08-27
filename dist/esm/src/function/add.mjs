import baseOperation from '../core/baseOperation.mjs';

/**
 * Addition logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {...number?} arg First number
 * @returns {number|any} Returns number for added value
 * @example
 *
 * add(1, 1)
 * // => 2
 */
function add (...arg) {

    return baseOperation({
        arg,
        "operation": "add"
    });

}
export default add;

