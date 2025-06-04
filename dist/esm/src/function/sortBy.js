import getTypeof from './getTypeof.js';

import baseSort from '../core/baseSort.js';

import has from './has.js';

/**
 * Sort By function is used to sort an array of values.
 *
 * @since 1.4.87
 * @category Array
 * @param {any[]} objectValue List of array you want to sort
 * @param {Function} func Callback function or sort type
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
function sortBy (objectValue, func) {

    const finalResponse=baseSort(objectValue, function (orderA, orderB) {

        if (has(func) && getTypeof(func) === 'function') {

            return func(orderA, orderB);

        }

        return orderA - orderB;

    });

    return finalResponse;

}
export default sortBy;

