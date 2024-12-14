const getKeyVal = require('../core/getKeyVal');

/**
 * Get key Array or JSON
 *
 * @since 1.0.1
 * @category String
 * @param {any} objectValue Either JSON or Array
 * @returns {string} Returns it respective key or index
 * @example
 *
 * getKey({"s":1})
 * => s
 */
function getKey (objectValue) {

    return getKeyVal(objectValue, "key");

}
module.exports=getKey;

