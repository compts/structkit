import curryArg from '../core/curryArg.mjs';

import baseReduce from '../core/baseReduce.mjs';

import {getTypeofInternal} from '../core/getTypeOf.mjs';

import each from './each.mjs';

import indexOfNotExist from './indexOfNotExist.mjs';

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

        return baseReduce(function (total, value) {

            if (getTypeofInternal(value) === "array") {

                each(value, function (valEach) {

                    if (indexOfNotExist(valEach, total)) {

                        total.push(valEach);

                    }

                });

            }

            return total;

        }, [], rawValue);

    }, arg);

}
export default union;

