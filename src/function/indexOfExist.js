const indexOf = require('./indexOf');

/**
 * Index of array is Exist or not
 *
 * @since 1.3.1
 * @category Seq
 * @param {any[]} arrayObject Array
 * @param {any} value Value for array lookup
 * @returns {boolean} Return array.
 * @example
 *
 * indexOfExist([312], 32)
 * // => false
 */
function indexOfExist (arrayObject, value) {

    const zero = 0;

    return indexOf(arrayObject, value)>=zero;

}
module.exports=indexOfExist;
