import curryArg from '../core/curryArg.js';

import {two} from '../core/defaultValue.js';

/**
 * To check if the two arguments are less
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
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

