import curryArg from '../core/curryArg';

/**
 * To check if its equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * equal('as', 'as')
 * // => true
 */
function equal (...args) {

    return curryArg(function (aa, bb) {

        return aa === bb;

    }, args);

}
export default equal;

