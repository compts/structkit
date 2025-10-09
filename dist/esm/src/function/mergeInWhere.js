import curryArg from '../core/curryArg.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import baseMap from '../core/baseMap.js';

import where from './where.js';

import mergeWithKey from './mergeWithKey.js';

import each from './each.js';

import selectInData from './selectInData.js';

import isEmpty from './isEmpty.js';

import {three} from '../variable/defaultValue.js';

/**
 * Merging two json/array object with the help of where clause
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} whereValue where clause for you to merge the two set of data, where clause at `$1`  for `objectValue` and `$2`  for `mergeValue`
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeInWhere({"$1.id":"$2.id","$2.title":"test only"}, [{"s":23,"id":1}],[{"id":1,"title":"test only"}])
 *=> [{ "id":1, "s":23, "title":"test only"}]
 */
function mergeInWhere (whereValue, objectValue, mergeValue) {

    return curryArg(function (rawWhereValue, rawObjectValue, rawMergeValue) {

        const rawObjectType = getTypeofInternal(rawObjectValue);

        if (getTypeofInternal(rawMergeValue) !== rawObjectType) {

            throw new Error("Invalid , both value must be "+rawObjectType);

        }

        return baseMap(function (value) {

            each(mergeValue, function (subValue) {

                const joinValue = {
                    "$1": value,
                    "$2": subValue
                };
                const selectData = selectInData(rawWhereValue, joinValue);
                const whereData = where(selectData, subValue);

                if (isEmpty(whereData) === false) {

                    value = mergeWithKey(value, subValue);

                }

            });

            return value;

        }, rawObjectValue);

    }, [
        whereValue,
        objectValue,
        mergeValue
    ], three);

}
export default mergeInWhere;

