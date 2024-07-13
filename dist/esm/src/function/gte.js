import curryArg from '../core/curryArg.js';

import {two} from '../core/defaultValue.js';

/**
 *  To check if its greater than to equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Either JSON or Array
 * @param {any} value2 Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * gte(1, 2)
 * // => false
 */
function gte (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa >= bb;

    }, [
        value1,
        value2
    ], two);

}
export default gte;

