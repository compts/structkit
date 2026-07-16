import curryArg from '../core/curryArg.mjs';

import baseReduce from '../core/baseReduce.mjs';

import {getTypeofInternal} from '../core/getTypeOf.mjs';

import each from './each.mjs';

/**
 * Flatten an array to a single level.
 *
 * @since 1.4.87
 * @category Array
 * @param {any} arg First number
 * @returns {any} Returns true or false.
 * @example
 *
 * flatten([1,2,3,4,[5,6],7])
 * // => [1,2,3,4,5,6,7]
 */
function flatten (arg) {

    return curryArg(function (rawValue) {

        return baseReduce(function (total, value) {

            if (getTypeofInternal(value) === "array") {

                each(value, function (valEach) {

                    total.push(valEach);

                });

            } else {

                total.push(value);

            }

            return total;

        }, [], rawValue);

    }, [arg]);

}
export default flatten;

