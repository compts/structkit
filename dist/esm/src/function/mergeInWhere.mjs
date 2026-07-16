import curryArg from '../core/curryArg.mjs';

import {getTypeofInternal} from '../core/getTypeOf.mjs';

import baseMap from '../core/baseMap.mjs';

import where from './where.mjs';

import mergeWithKey from './mergeWithKey.mjs';

import each from './each.mjs';

import selectInData from './selectInData.mjs';

import isEmpty from './isEmpty.mjs';

import {three} from '../variable/defaultValue.mjs';

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

