import indexOf from './indexOf.js';

import {zero} from '../core/defaultValue.js';

/**
 * Check index of array is Exist or not
 *
 * @since 1.3.1
 * @category Boolean
 * @param {any[]} arrayObject Array
 * @param {any} value Value for array lookup
 * @returns {boolean} Return array.
 * @example
 *
 * indexOfExist([312], 32)
 * // => false
 */
function indexOfExist (arrayObject, value) {

    return indexOf(arrayObject, value) >= zero;

}
export default indexOfExist;

