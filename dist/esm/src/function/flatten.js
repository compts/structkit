import curryArg from '../core/curryArg.js';

import baseReduce from '../core/baseReduce.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import each from './each.js';

/**
 * Flatten an array to a single level.
 *
 * @since 1.4.87
 * @category Condition
 * @param {any} arg First number
 * @returns {any} Returns true or false.
 * @example
 *
 * flatten([1,2,3,4,[5,6],7])
 * // => [1,2,3,4,5,6,7]
 */
function flatten (arg) {

    return curryArg(function (rawValue) {

        return baseReduce([], rawValue, function (total, value) {

            if (getTypeofInternal(value) === "array") {

                each(value, function (valEach) {

                    total.push(valEach);

                });

            } else {

                total.push(value);

            }

            return total;

        });

    }, [arg]);

}
export default flatten;

