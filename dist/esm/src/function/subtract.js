import curryArg from '../core/curryArg.js';

import {two} from '../core/defaultValue.js';

/**
 * Subtract logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for subtracted value
 * @example
 *
 * subtract(1, 1)
 * // => 0
 */
function subtract (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa - bb;

    }, [
        value1,
        value2
    ], two);

}
export default subtract;

