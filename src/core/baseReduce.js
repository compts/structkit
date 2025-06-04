const each = require('../function/each');


/**
 * Base reduce
 *
 * @since 1.4.8
 * @category Core
 * @param {any} defaultValue Array in number
 * @param {any[]} listData decimal point and default value is
 * @param {any} func The data you want to map
 * @returns {number} Returns the total.
 * @example
 *
 * baseReduce(2,[1,2],(total,value)=>total+value)
 * // => 5
 */
function baseReduce (defaultValue, listData, func) {

    const that = this;

    each(listData, function (av, ak) {

        defaultValue = func.apply(that, [
            defaultValue,
            av,
            ak
        ]);

    });

    return defaultValue;

}
module.exports=baseReduce;

