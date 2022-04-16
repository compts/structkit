import getKeyVal from '../core/getKeyVal';

/**
 * Last of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Array
 * @returns {any} Returns json result first key or index.
 * @example
 *
 * last([1,2] )
 *=>2
 */
function last (objectValue) {

    return getKeyVal(objectValue, "last_index");

}
export default last;

