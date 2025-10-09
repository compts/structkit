import curryArg from '../core/curryArg.js';

import count from './count.js';

import {getIndexOf} from '../core/getIndexOf.js';

import {zero, two} from '../variable/defaultValue.js';

/**
 * Get the last index Of array
 *
 * @since 1.0.1
 * @category Relation
 * @param {any} value Value you are searching for
 * @param {any} objectValue Array
 * @returns {any} Return get the index or array
 * @example
 *
 * lastIndexOf([1,2], 1)
 * // => 0
 */
function lastIndexOf (value, objectValue) {

    return curryArg(function (rawValue, rawObjectValue) {

        const indexValue = getIndexOf(rawObjectValue, rawValue, zero, count(rawObjectValue), true);

        return indexValue;

    }, [
        value,
        objectValue
    ], two);

}
export default lastIndexOf;

