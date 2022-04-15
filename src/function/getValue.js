const getKeyVal = require('../core/getKeyVal');


/**
 * Get value of json or array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getValue({"s":1})
 * => 1
 */
function getValue (objectValue) {

    return getKeyVal(objectValue, "value");

}
module.exports=getValue;

