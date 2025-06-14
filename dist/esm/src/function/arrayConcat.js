import each from './each.js';

import toArray from './toArray.js';

import arraySlice from './arraySlice.js';

import first from './first.js';

import curryArg from '../core/curryArg.js';

import {one} from '../core/defaultValue.js';

/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Array
 * @param {...any?} arg Multiple arguments of array that you want to concat
 * @returns {any[]} Returns the array.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
function arrayConcat (...arg) {

    return curryArg(function (...argsub) {

        if (argsub.length < one) {

            return [];

        }

        let return_val=toArray(first(argsub));
        const arrayValue = toArray(arraySlice(argsub, one));

        each(arrayValue, function (value) {

            return_val = return_val.concat(toArray(value));

        });

        return return_val;

    }, arg);

}
export default arrayConcat;

