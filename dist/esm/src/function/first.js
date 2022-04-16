import getKeyVal from '../core/getKeyVal';

/**
 * First
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Array
 * @returns {any} Returns json result first key or index.
 * @example
 *
 * first([1,2,3])
 *=>{key: '0', value: 1}
 */
function first (objectValue) {

    return getKeyVal(objectValue, "first_index");

}
export default first;

