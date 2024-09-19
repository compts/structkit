const baseReduce = require('./baseReduce');
const {getTypeofInternal} = require("./getTypeOf");
const {zero, one} = require("./defaultValue");


/**
 * Counting the true in list of array
 *
 * @since 1.4.8
 * @category Any
 * @param {any[]} objectValue The data is array
 * @returns {any} Returns the total.
 * @example
 *
 * baseCountValidList([true,true])
 * // => 2
 */
function baseCountValidList (objectValue) {

    return baseReduce(zero, objectValue, function (total, value) {


        if (value && getTypeofInternal(value) === "boolean") {

            return total +one;

        }

        return total;

    });

}
module.exports = baseCountValidList;
