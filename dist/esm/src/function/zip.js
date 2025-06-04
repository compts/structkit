import curryArg from '../core/curryArg.js';

import {one} from '../core/defaultValue.js';

import limit from './limit.js';

import first from './first.js';

import baseReduce from '../core/baseReduce.js';

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists
 *
 * @since 1.4.86
 * @category Array
 * @param {...any?} arg First number
 * @returns {any} Returns true or false.
 * @example
 *
 * zip([1],[2],[3])
 * // => [[1,2,3]]
 */
function zip (...arg) {

    return curryArg(function (...rawValue) {

        const varLimit = limit(rawValue, one);

        return baseReduce([], first(rawValue), function (total, value, key) {

            total.push(baseReduce([value], varLimit, function (totalSub, valueSub) {

                totalSub.push(valueSub[key]);

                return totalSub;

            }));

            return total;

        });

    }, arg);

}
export default zip;

