const indexOf = require('./indexOf');
const {zero} = require("../core/defaultValue");

/**
 * Check index of array is Exist or not
 *
 * @since 1.3.1
 * @category Relation
 * @param {any[]} arrayObject Array
 * @param {any} value Value for array lookup
 * @returns {boolean} Return boolean.
 * @example
 *
 * indexOfExist([312], 32)
 * // => false
 */
function indexOfExist (arrayObject, value) {

    return indexOf(arrayObject, value) >= zero;

}
module.exports=indexOfExist;
