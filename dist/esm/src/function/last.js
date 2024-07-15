import getKeyVal from '../core/getKeyVal.js';

/**
 * Get the last value of array or JSON
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The data is array
 * @returns {any} Returns last value of `objectValue`.
 * @example
 *
 * last([1,2] )
 *=>2
 */
function last (objectValue) {

    return getKeyVal(objectValue, "last_index").value;

}
export default last;

