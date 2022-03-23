import getKeyVal from '../core/getKeyVal';


/**
 * Last
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * last([1,2] )
 *=>2
 */
function last (objectValue) {

    return getKeyVal(objectValue, "last_index");

}
export default last;

