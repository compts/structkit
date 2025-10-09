import indexOf from './indexOf.js';

import {negOne} from '../variable/defaultValue.js';

import curryArg from '../core/curryArg.js';

import {two} from '../variable/defaultValue.js';

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

