import getTypeof from './getTypeof.mjs';

import baseSort from '../core/baseSort.mjs';

import has from './has.mjs';

import curryArg from '../core/curryArg.mjs';

/**
 * Sort By function is used to sort an array of values.
 *
 * @since 1.4.87
 * @category Array
 * @param {Function} func Callback function or sort type
 * @param {any[]} objectValue List of array you want to sort
 * @returns {any[]} Returns the total.
 * @example
 *
 * sortBy((orderA, orderB) => orderA - orderB ,[2,3,1])
 *=>[1,2,3]
 */
function sortBy (func, objectValue) {

    return curryArg(function (rawFunc, rawObjectValue) {

        const finalResponse=baseSort(rawObjectValue, function (orderA, orderB) {

            if (has(func) && getTypeof(func) === 'function') {

                return rawFunc(orderA, orderB);

            }

            return orderA - orderB;

        });

        return finalResponse;

    }, [
        func,
        objectValue
    ]);

}
export default sortBy;

