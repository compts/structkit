import curryArg from '../core/curryArg.mjs';

import {two} from '../variable/defaultValue.mjs';

/**
 * To check if the two arguments are less than to equal
 *
 * @since 1.4.8
 * @category Predicate
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
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

