const baseReduce = require('./baseReduce');
const toArray = require('../function/toArray');
const {getTypeofInternal} = require("./getTypeOf");
const {zero, one} = require("../variable/defaultValue");


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

    return baseReduce(function (total, value) {

        const values = toArray(value);

        total +=baseReduce(function (subtotal, subvalue) {


            if (subvalue && getTypeofInternal(subvalue) === "boolean") {

                return subtotal +one;

            }

            return subtotal;

        }, zero, values);

        return total;

    }, zero, objectValue);

}
module.exports = baseCountValidList;
