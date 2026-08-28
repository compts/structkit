
const {getTypeofInternal} = require("./getTypeOf");

const has = require('./_has');
const each = require('../function/each');


/**
 * Sort By
 *
 * @since 1.4.87
 * @category Array
 * @param {any[]} objectValue List of array you want to sort
 * @param {any=} func Callback function or sort type
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
function baseSort (objectValue, func) {

    const jsonn=objectValue;

    const js_m=getTypeofInternal(jsonn) === "json"
        ?each(jsonn)
        :jsonn;

    const finalResponse=js_m.sort(function (orderA, orderB) {

        if (has(func) && getTypeofInternal(func) === 'function') {

            return func(orderA, orderB);

        }

        return orderA- orderB;

    });

    return finalResponse;

}
module.exports=baseSort;

