const indexOf = require('./indexOf');
const {negOne} = require("../core/defaultValue");

/**
 * Check index of array Not or exist
 *
 * @since 1.4.1
 * @category Boolean
 * @param {any[]} arrayObject Array
 * @param {any} value Value for array lookup
 * @returns {boolean} Return boolean.
 * @example
 *
 * indexOfNotExist([312], 32)
 * // => true
 */
function indexOfNotExist (arrayObject, value) {

    return indexOf(arrayObject, value) === negOne;

}
module.exports=indexOfNotExist;

