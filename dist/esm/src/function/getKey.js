import getKeyVal from '../core/getKeyVal';

/**
 * Get key Object or JSON
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue JSON or Array
 * @returns {string} Returns it respective key or index
 * @example
 *
 * getKey({"s":1})
 * => s
 */
function getKey (objectValue) {

    return getKeyVal(objectValue, "key");

}
export default getKey;

