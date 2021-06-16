import getKeyVal from '../core/getKeyVal';

/**
 * First
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * first([1,2])
 *=>1
 */
function first (objectValue) {

    return getKeyVal(objectValue, "first_index");

}
export default first;
