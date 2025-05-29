import _has from '../core/_has.js';

import curryArg from '../core/curryArg.js';

/**
 * Check if object has value or null or undefined
 *
 * @since 1.0.1
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * has({'as':1}, 'as')
 * // => true
 */
function has (...args) {

    return curryArg(function (aa, bb) {

        return _has(aa, bb);

    }, args);

}
export default has;

