const getTypeof = require('./getTypeof');

/**
 * To convert any data type(except the data has been already been an array) into array type
 *
 * @since 1.0.1
 * @category Array
 * @param {any} value Value you want to convert in array
 * @returns {any[]} Return in array.
 * @example
 *
 * toArray(1)
 *=>[1]
 */
function toArray (value) {

    let return_val = value;

    if (getTypeof(return_val) !== "array") {

        return_val = [value];

    }

    return return_val;

}
module.exports=toArray;

