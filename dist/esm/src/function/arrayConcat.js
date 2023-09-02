import each from './each';

import toArray from './toArray';

import arraySlice from './arraySlice';

import first from './first';

/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Array
 * @param {...any} arg First array
 * @returns {any[]} Returns the array.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
function arrayConcat (...arg) {

    const one =1;

    if (arg.length < one) {

        return [];

    }

    let return_val=toArray(first(arg));
    const arrayValue = toArray(arraySlice(arg, one));

    each(arrayValue, function (key, value) {

        return_val = return_val.concat(toArray(value));

    });

    return return_val;

}
export default arrayConcat;

