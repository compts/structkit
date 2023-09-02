import getKeyVal from '../core/getKeyVal';

/**
 * Get value of json or array
 *
 * @since 1.0.1
 * @category String
 * @param {any} objectValue Either JSON or Array
 * @returns {string} Returns it respective value
 * @example
 *
 * getValue({"s":1})
 * => 1
 */
function getValue (objectValue) {

    return getKeyVal(objectValue, "value");

}
export default getValue;

