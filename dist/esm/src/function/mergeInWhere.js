import curryArg from '../core/curryArg.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import baseMap from '../core/baseMap.js';

import where from './where.js';

import mergeWithKey from './mergeWithKey.js';

/**
 * Merging two json/array object with the help of where clause
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge
 * @param {any} whereValue where clause for you to merge the two set of data
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeInWhere({"s":1},{"ss":1})
 *=> {"s":1,"ss":1}
 */
function mergeInWhere (objectValue, mergeValue, whereValue) {

    return curryArg(function (rawObjectValue, rawMergeValue, rawWhereValue) {

        const rawObjectType = getTypeofInternal(rawObjectValue);

        if (getTypeofInternal(rawMergeValue) !== rawObjectType) {

            throw new Error("Invalid , both value must be "+rawObjectType);

        }

        return baseMap(rawObjectValue, function (value) {

            const dataWhere = where(rawMergeValue, rawWhereValue);

            value = mergeWithKey(value, dataWhere);

            return value;

        });

    }, [
        objectValue,
        mergeValue,
        whereValue
    ]);

}
export default mergeInWhere;

