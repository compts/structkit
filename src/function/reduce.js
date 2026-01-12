const curryArg = require("../core/curryArg");
const baseReduce = require("../core/baseReduce");
const {three} = require("../variable/defaultValue");


/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Function
 * @param {any} func Callback function for how to map the data
 * @param {any} defaultValue Starting value that you want to use as reference
 * @param {any[]} listData Array value that you want to map
 * @returns {any} Return redue value
 * @example
 *
 * reduce((total,value)=>total+value, 2,[1,2])
 * // => 5
 */
function reduce (func, defaultValue, listData) {

    const that = this;

    return curryArg(function (rawFunc, rawDefaultValue, rawListData) {

        return baseReduce.apply(that, [
            rawFunc,
            rawDefaultValue,
            rawListData
        ]);

    }, [
        func,
        defaultValue,
        listData
    ], three);

}
module.exports=reduce;
