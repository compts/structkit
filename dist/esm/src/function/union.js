import curryArg from '../core/curryArg.js';

import baseReduce from '../core/baseReduce.js';

import unique from './unique.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import each from './each.js';

/**
 * To create a new array that is the union of all the arrays passed as arguments. The union will contain only unique values.
 *
 * @since 1.4.7
 * @category Collection
 * @param {...any?} arg First number
 * @returns {any[]} Returns true or false.
 * @example
 *
 * union([1,2,3,4,7],[1,2,3,4,5,6,7,8])
 * // => [1, 2, 3, 4, 7, 5, 6, 8]
 */
function union (...arg) {

    return curryArg(function (...rawValue) {

        return baseReduce([], rawValue, function (total, value) {

            if (getTypeofInternal(value) === "array") {

                each(value, function (valEach) {

                    total.push(valEach);

                });

            }

            return unique(total);

        });

    }, arg);

}
export default union;

