import curryArg from '../core/curryArg.js';

import {two} from '../core/defaultValue.js';

/**
 * To check if its less than to equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any value type
 * @param {any=} value2 Any value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * lte(1, 2)
 * // => true
 */
function lte (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa <= bb;

    }, [
        value1,
        value2
    ], two);

}
export default lte;

