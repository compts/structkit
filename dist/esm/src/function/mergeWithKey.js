import curryArg from '../core/curryArg.js';

import baseAppend from '../core/baseAppend.js';

import each from './each.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import indexOfExist from './indexOfExist.js';

import {two} from '../variable/defaultValue.js';

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

        if (indexOfExist(getTypeofInternal(rawObjectValue), [
            "array",
            "string",
            "number"
        ])|| indexOfExist(getTypeofInternal(rawMergeValue), [
            "array",
            "string",
            "number"
        ])) {

            throw new Error("Invalid , both value must be json");

        }

        each(rawMergeValue, function (sVal, sKey) {

            rawObjectValue = baseAppend(rawObjectValue, sVal, sKey);

        });

        return rawObjectValue;

    }, [
        objectValue,
        mergeValue
    ], two);

}
export default mergeWithKey;

