import indexOf from './indexOf.mjs';

import {zero, two} from '../variable/defaultValue.mjs';

import curryArg from '../core/curryArg.mjs';

/**
 * Check index of array is Exist or not
 *
 * @since 1.3.1
 * @category Predicate
 * @param {any=} value Value for array lookup
 * @param {any[]=} arrayObject Array
 * @returns {boolean} Return boolean.
 * @example
 *
 * indexOfExist(32, [312])
 * // => false
 */
function indexOfExist (value, arrayObject) {

    return curryArg(function (rawValue, rawObjectValue) {

        return indexOf(rawValue, rawObjectValue) >= zero;

    }, [
        value,
        arrayObject
    ], two);

}
export default indexOfExist;

