const has = require('./has');
const curryArg = require("../core/curryArg");
const {schemaSplitData} = require("../core/baseGetData");
const baseReduce = require("../core/baseReduce");
const {getTypeofInternal} = require('../core/getTypeOf');

const empty = require('./empty');
const first = require('../function/first');
const isEmpty = require('../function/isEmpty');
const {zero} = require("../variable/defaultValue");
const remove = require('../function/remove');


/**
 * Set Data in array or json using string to search the data either by its key or index, given a value to update the data.
 *
 * @since 1.4.87
 * @category Collection
 * @param {any=} split_str Search key or index.
 * @param {any=} objectValue Either Json or Array data.
 * @param {any=} updateValue Value to update the data.
 * @returns {any} Returns the total.
 * @example
 *
 * setData("s", {"s":1},2)
 *=> 2
 */
function setData (split_str, objectValue, updateValue) {

    if (!has(objectValue)) {

        return {};

    }

    return curryArg(function (rawSplit_str, rawObjectValue, rawUpdateValue) {

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
        split_str,
        objectValue,
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
module.exports=setData;
