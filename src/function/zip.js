const curryArg = require("../core/curryArg");
const {one} = require("../core/defaultValue");
const limit = require('./limit');
const first = require("./first");
const baseReduce = require("../core/baseReduce");

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists
 *
 * @since 1.4.86
 * @category Array
 * @param {...any?} arg First number
 * @returns {any} Returns true or false.
 * @example
 *
 * zip([1],[2],[3])
 * // => [[1,2,3]]
 */
function zip (...arg) {

    return curryArg(function (...rawValue) {

        const varLimit = limit(rawValue, one);

        return baseReduce([], first(rawValue), function (total, value, key) {

            total.push(baseReduce([value], varLimit, function (totalSub, valueSub) {


                totalSub.push(valueSub[key]);

                return totalSub;

            }));

            return total;

        });


    }, arg);

}
module.exports=zip;

