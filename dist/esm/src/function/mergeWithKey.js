import curryArg from '../core/curryArg.js';

import baseAppend from '../core/baseAppend.js';

import each from './each.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import indexOfExist from './indexOfExist.js';

/**
 * Merging two json object
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge or replace from `objectValue`
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeWithKey({"s":1},{"ss":1})
 *=> {"s":1,"ss":1}
 */
function mergeWithKey (objectValue, mergeValue) {

    return curryArg(function (rawObjectValue, rawMergeValue) {

        if (indexOfExist([
            "array",
            "string",
            "number"
        ], getTypeofInternal(rawObjectValue))|| indexOfExist([
            "array",
            "string",
            "number"
        ], getTypeofInternal(rawMergeValue))) {

            throw new Error("Invalid , both value must be json");

        }

        each(rawMergeValue, function (sKey, sVal) {

            rawObjectValue = baseAppend(rawObjectValue, sVal, sKey);

        });

        return rawObjectValue;

    }, [
        objectValue,
        mergeValue
    ]);

}
export default mergeWithKey;

