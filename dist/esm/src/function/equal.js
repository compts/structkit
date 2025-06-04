import curryArg from '../core/curryArg.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import {two} from '../core/defaultValue.js';

/**
 * To check if the two arguments are equal
 *
 * @since 1.4.8
 * @category Relation
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
 * @example
 *
 * equal('as', 'as')
 * // => true
 */
function equal (value1, value2) {

    return curryArg(function (aa, bb) {

        if (getTypeofInternal(aa) !== getTypeofInternal(bb)) {

            return false;

        }

        return aa === bb;

    }, [
        value1,
        value2
    ], two);

}
export default equal;

