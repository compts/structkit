const getTypeof = require('./getTypeof');

const count = require('./count');

const indexOfExist = require('./indexOfExist');


/**
 * Check if data is empty
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value JSON , Array and String
 * @returns {boolean} Returns true or false
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    const zero =0;

    const typeofvalue = getTypeof(value);

    const invalidList = [
        'null',
        'undefined'
    ];

    if (typeofvalue=== "json" || typeofvalue === "array") {

        return count(value, true)===zero;

    }
    if (typeofvalue=== "number") {

        return value===zero;

    }

    if (indexOfExist(invalidList, typeofvalue)) {

        return true;

    }

    return (/^\s*$/gmi).test(value);

}
module.exports=isEmpty;

