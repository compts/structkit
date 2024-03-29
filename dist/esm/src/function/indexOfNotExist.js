import indexOf from './indexOf';

/**
 * Check index of array Not or exist
 *
 * @since 1.4.1
 * @category Boolean
 * @param {any[]} arrayObject Array
 * @param {any} value Value for array lookup
 * @returns {boolean} Return array.
 * @example
 *
 * indexOfNotExist([312], 32)
 * // => true
 */
function indexOfNotExist (arrayObject, value) {

    const zero = -1;

    return indexOf(arrayObject, value)===zero;

}
export default indexOfNotExist;

