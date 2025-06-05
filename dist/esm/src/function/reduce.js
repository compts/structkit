import curryArg from '../core/curryArg.js';

import baseReduce from '../core/baseReduce.js';

import {three} from '../core/defaultValue.js';

/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Function
 * @param {any} defaultValue Starting value that you want to use as reference
 * @param {any[]} listData Array value that you want to map
 * @param {any} func Callback function for how to map the data
 * @returns {any} Return redue value
 * @example
 *
 * reduce(2,[1,2],(total,value)=>total+value)
 * // => 5
 */
function reduce (defaultValue, listData, func) {

    const that = this;

    return curryArg(function (rawDefaultValue, rawListData, rawFunc) {

        return baseReduce.apply(that, [
            rawDefaultValue,
            rawListData,
            rawFunc
        ]);

    }, [
        defaultValue,
        listData,
        func
    ], three);

}
export default reduce;

