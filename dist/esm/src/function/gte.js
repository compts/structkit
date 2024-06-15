import curryArg from '../core/curryArg';

/**
 *  To check if its greater than to equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * gte(1, 2)
 * // => false
 */
function gte (...args) {

    return curryArg(function (aa, bb) {

        return aa >= bb;

    }, args);

}
export default gte;

