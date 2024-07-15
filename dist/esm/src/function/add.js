import curryArg from '../core/curryArg.js';

import {two} from '../core/defaultValue.js';

/**
 * Addition logic
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number} value2 Second number
 * @returns {number} Returns true or false.
 * @example
 *
 * add(1, 1)
 * // => 2
 */
function add (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa + bb;

    }, [
        value1,
        value2
    ], two);

}
export default add;

