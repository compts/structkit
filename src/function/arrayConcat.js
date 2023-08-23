const each = require('./each');
const toArray = require('./toArray');
const arraySlice = require('./arraySlice');
const first = require('./first');

/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Seq
 * @param {...any} arg First array
 * @returns {any[]} Returns the array.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
function arrayConcat (...arg) {

    const one =1;

    if (arg.length < one) {

        return [];

    }

    let return_val=toArray(first(arg));
    const arrayValue = toArray(arraySlice(arg, one));

    each(arrayValue, function (key, value) {

        return_val = return_val.concat(toArray(value));

    });

    return return_val;

}
module.exports=arrayConcat;

