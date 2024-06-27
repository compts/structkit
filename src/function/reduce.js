const curryArg = require("../core/curryArg");
const baseReduce = require("../core/baseReduce");
const {three} = require("../core/defaultValue");


/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Core
 * @param {any} defaultValue Array in number
 * @param {any[]} listData decimal point and default value is
 * @param {any} func The data you want to map
 * @returns {number} Returns the total.
 * @example
 *
 * baseReduce(2,[1,2],)
 * // => 3.00
 */
function reduce (defaultValue, listData, func) {

    const that = this;

    return curryArg(function (rawDefaultValue, rawListData, rawFunc) {

        return baseReduce.apply(that, [
            rawDefaultValue,
            rawListData,
            rawFunc
        ]);

    }, [
        defaultValue,
        listData,
        func
    ], three);

}
module.exports=reduce;
