const each = require('./each');
const toArray = require('./toArray');
const arraySlice = require('./arraySlice');
const first = require('./first');
const curryArg = require("../core/curryArg");
const {one} = require("../core/defaultValue");


/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Array
 * @param {...any?} arg Multiple arguments of array that you want to concat
 * @returns {any[]} Returns the array.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
function arrayConcat (...arg) {

    return curryArg(function (...argsub) {

        if (argsub.length < one) {

            return [];

        }

        let return_val=toArray(first(argsub));
        const arrayValue = toArray(arraySlice(argsub, one));

        each(arrayValue, function (key, value) {

            return_val = return_val.concat(toArray(value));

        });

        return return_val;

    }, arg);

}
module.exports=arrayConcat;

