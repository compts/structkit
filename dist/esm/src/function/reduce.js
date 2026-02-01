import curryArg from '../core/curryArg.js';

import baseReduce from '../core/baseReduce.js';

import {three} from '../variable/defaultValue.js';

/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Function
 * @param {any} func Callback function for how to map the data
 * @param {any} defaultValue Starting value that you want to use as reference
 * @param {any[]} listData Array value that you want to map
 * @returns {any} Return redue value
 * @example
 *
 * reduce((total,value)=>total+value, 2,[1,2])
 * // => 5
 */
function reduce (func, defaultValue, listData) {

    return curryArg(function (rawFunc, rawDefaultValue, rawListData) {

        return baseReduce.apply(this, [
            rawFunc,
            rawDefaultValue,
            rawListData
        ]);

    }, [
        func,
        defaultValue,
        listData
    ], three);

}
export default reduce;

