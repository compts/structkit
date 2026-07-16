
import count from './count.mjs';

import curryArg from '../core/curryArg.mjs';

import {getIndexOf} from '../core/getIndexOf.mjs';

import {two} from '../variable/defaultValue.mjs';

/**
 * Index of array
 *
 * @since 1.0.1
 * @category Logic
 * @param {any=} value Value in array
 * @param {any[]=} objectValue Array
 * @returns {number} Returns the index.
 * @example
 *
 * indexOf(1, [1,2])
 * // => 0
 */
function indexOf (value, objectValue) {

    return curryArg(function (rawValue, rawObjectValue) {

        const start = 0;

        const indexValue = getIndexOf(rawObjectValue, rawValue, start, count(rawObjectValue), false);

        return indexValue;

    }, [
        value,
        objectValue
    ], two);

}
export default indexOf;

