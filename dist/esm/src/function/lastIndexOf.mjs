import curryArg from '../core/curryArg.mjs';

import count from './count.mjs';

import {getIndexOf} from '../core/getIndexOf.mjs';

import {zero, two} from '../variable/defaultValue.mjs';

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
 * lastIndexOf(1, [1,2])
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

