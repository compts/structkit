import curryArg from '../core/curryArg.js';

import baseReduce from '../core/baseReduce.js';

import {three} from '../core/defaultValue.js';

/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Core
 * @param {any} defaultValue Array in number
 * @param {any[]} listData decimal point and default value is
 * @param {any} func The data you want to map
 * @returns {number} Returns the total.
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

