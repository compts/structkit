import getKeyVal from '../core/getKeyVal.js';

/**
 * Get the first value of array
 *
 * @since 1.0.1
 * @category Any
 * @param {any} objectValue The data is array
 * @returns {any} Returns first value of `objectValue`.
 * @example
 *
 * first([1,2,3])
 *=> 1
 */
function first (objectValue) {

    return getKeyVal(objectValue, "first_index").value;

}
export default first;

