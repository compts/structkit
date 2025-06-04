import has from './has.js';

import curryArg from '../core/curryArg.js';

import {schemaSplitData} from '../core/baseGetData.js';

import baseReduce from '../core/baseReduce.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import empty from './empty.js';

import first from '../function/first.js';

import isEmpty from '../function/isEmpty.js';

import {zero} from '../core/defaultValue.js';

import remove from '../function/remove.js';

/**
 * Set Data in array or json using string to search the data either by its key or index, given a value to update the data.
 *
 * @since 1.4.87
 * @category Collection
 * @param {any=} objectValue Either Json or Array data.
 * @param {any=} split_str Search key or index.
 * @param {any=} updateValue Value to update the data.
 * @returns {any} Returns the total.
 * @example
 *
 * setData({"s":1},"s",2)
 *=> 2
 */
function setData (objectValue, split_str, updateValue) {

    if (!has(objectValue)) {

        return empty(objectValue);

    }

    return curryArg(function (rawObjectValue, rawSplit_str, rawUpdateValue) {

        if (isEmpty(rawSplit_str)) {

            return empty(rawObjectValue);

        }

        const spl= schemaSplitData(rawSplit_str);

        return baseReduce(rawObjectValue, [spl], function (total, value) {

            if (getTypeofInternal(total) === "json") {

                valueToUpdate(total, value, rawUpdateValue);

            }
            if (getTypeofInternal(total) === "array") {

                const rawTotal = first(total);

                valueToUpdate(rawTotal, value, rawUpdateValue);
                total = [rawTotal];

            }

            return total;

        });

    }, [
        objectValue,
        split_str,
        updateValue
    ]);

}

/**
 * Given a value to update the data in array or json
 *
 * @since 1.4.87
 * @category Collection
 * @param {any} objectValue Either Json or Array data.
 * @param {any[]} whereStr Either Json or Array data.
 * @param {any} updateValue Search key or index.
 * @returns {any} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=> 1
 * @example
 * getData({"a":{"a":2},"b":{"a":3}},"a:a")
 *=> {a: 2}
 */
function valueToUpdate (objectValue, whereStr, updateValue) {

    const getRmoveValue = remove(whereStr, zero);

    if (isEmpty(getRmoveValue)) {

        objectValue[first(whereStr)] = updateValue;

    } else {

        if (has(objectValue, first(whereStr)) === false) {

            objectValue[first(whereStr)] = {};

        }
        valueToUpdate(objectValue[first(whereStr)], getRmoveValue, updateValue);

    }

}
export default setData;

