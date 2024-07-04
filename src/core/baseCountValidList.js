const baseReduce = require('./baseReduce');
const {zero, one} = require("./defaultValue");


/**
 * Append data for json and array
 *
 * @since 1.4.8
 * @category Any
 * @param {any[]} objectValue The data either json or array
 * @returns {any} Returns the total.
 * @example
 *
 * baseAppend({'as':1}, 'as',2)
 * // => {'as':2}
 */
function baseCountValidList (objectValue) {

    return baseReduce(zero, objectValue, function (total, value) {

        if (value) {

            return total +one;

        }

        return total;

    });

}
module.exports = baseCountValidList;
