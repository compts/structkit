import count from './count';
import getIndexOf from '../core/getIndexOf';


/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The first number in an addition.
 * @param {any} value The first number in an addition.
 * @returns {any} Returns the total.
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

