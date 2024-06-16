import curryArg from '../core/curryArg';

import {two} from '../core/defaultValue';

/**
 * To check if its less than to equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * lte(1, 2)
 * // => true
 */
function lte (...args) {

    return curryArg(function (aa, bb) {

        return aa <= bb;

    }, args, two);

}
export default lte;

