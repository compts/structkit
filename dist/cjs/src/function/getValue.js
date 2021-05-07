const getKeyVal = require('../core/getKeyVal');


/**
 * Get value
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getValue({"s":1})
 * => 1
 */
function getValue (objectValue) {

    return getKeyVal(objectValue, "value");

}
module.exports=getValue;;

