import curryArg from '../core/curryArg';

import {two} from '../core/defaultValue';

/**
 *  To check if its less
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Either JSON or Array
 * @param {any} value2 Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * lt(1, 2)
 * // => true
 */
function lt (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa < bb;

    }, [
        value1,
        value2
    ], two);

}
export default lt;
