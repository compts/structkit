import indexOf from './indexOf.mjs';

import {negOne, two} from '../variable/defaultValue.mjs';

import curryArg from '../core/curryArg.mjs';

/**
 * Check index of array Not or exist
 *
 * @since 1.4.1
 * @category Predicate
 * @param {any=} value Value for array lookup
 * @param {any[]=} arrayObject Array
 * @returns {boolean} Return boolean.
 * @example
 *
 * indexOfNotExist(32, [312])
 * // => true
 */
function indexOfNotExist (value, arrayObject) {

    return curryArg(function (rawValue, rawObjectValue) {

        return indexOf(rawValue, rawObjectValue) === negOne;

    }, [
        value,
        arrayObject
    ], two);

}
export default indexOfNotExist;

