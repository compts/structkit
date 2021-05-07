
import count from './count';
import getIndexOf from '../core/getIndexOf';

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number|object|string} value The first number in an addition.
 * @returns {number|object|string} Returns the total.
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
