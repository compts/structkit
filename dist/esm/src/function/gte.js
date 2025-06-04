import curryArg from '../core/curryArg.js';

import {two} from '../core/defaultValue.js';

/**
 *  To check if the two arguments are greater than to equal
 *
 * @since 1.4.8
 * @category Relation
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
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

