const getTypeof = require('./getTypeof');
const baseSort = require('../core/baseSort');
const has = require('./has');
const curryArg = require("../core/curryArg");

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
module.exports=sortBy;
