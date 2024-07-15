
import count from './count.js';

import {getIndexOf} from '../core/getIndexOf.js';

/**
 * Get the last index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Array
 * @param {any} value Value you are searching for
 * @returns {any} Return get the index or array
 * @example
 *
 * lastIndexOf([1,2], 1)
 * // => 0
 */
function lastIndexOf (objectValue, value) {

    const start = 0;

    const indexValue = getIndexOf(objectValue, value, start, count(objectValue), true);

    return indexValue;

}
export default lastIndexOf;

