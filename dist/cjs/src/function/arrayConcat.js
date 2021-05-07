const getTypeof = require('./getTypeof');


/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|Object|string} arrayObject The second number in an addition.
 * @param {number|Object|string} arrayValue The second number in an addition.
 * @returns {Array} Returns the total.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
function arrayConcat (arrayObject, arrayValue) {

    const return_val=arrayObject;

    if (getTypeof(return_val)==="array") {

        return return_val.concat(arrayValue);

    }

    return [];

}
module.exports=arrayConcat;;

