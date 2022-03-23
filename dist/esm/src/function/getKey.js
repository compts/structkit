import getKeyVal from '../core/getKeyVal';


/**
 * Get key Object or JSON
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getKey({"s":1})
 * => s
 */
function getKey (objectValue) {

    return getKeyVal(objectValue, "key");

}
export default getKey;

