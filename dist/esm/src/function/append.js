import curryArg from '../core/curryArg.js';

import baseAppend from '../core/baseAppend.js';

import {two} from '../core/defaultValue.js';

/**
 * Append data for json or array
 *
 * @since 1.0.1
 * @category Any
 * @param {any} objectValue Value either json or array
 * @param {any} val Value for array index and json
 * @param {any=} key Json key
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function append (objectValue, val, key) {

    return curryArg(function (rawObjectValue, rawVal, rawKey) {

        return baseAppend(rawObjectValue, rawVal, rawKey);

    }, [
        objectValue,
        val,
        key
    ], two);

}
export default append;

