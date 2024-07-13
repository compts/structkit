
import count from './count.js';

import {getIndexOf} from '../core/getIndexOf.js';

/**
 * Index of array
 *
 * @since 1.0.1
 * @category Math
 * @param {any} objectValue Array
 * @param {any} value Value in array
 * @returns {number} Returns the index.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function indexOf (objectValue, value) {

    const start = 0;

    const indexValue = getIndexOf(objectValue, value, start, count(objectValue), false);

    return indexValue;

}
export default indexOf;

