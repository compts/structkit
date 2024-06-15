import curryArg from '../core/curryArg';

/**
 *  To check if its greater
 *
 * @since 1.4.8
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * gt(1, 2)
 * // => false
 */
function gt (...args) {

    return curryArg(function (aa, bb) {

        return aa > bb;

    }, args);

}
export default gt;

