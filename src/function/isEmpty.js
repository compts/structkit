const {getTypeofInternal} = require('../core/getTypeOf');
const {zero} = require("../core/defaultValue");

const count = require('./count');

const indexOfExist = require('./indexOfExist');

/**
 * Check if data is empty, null and undefined are now considered as empty
 *
 * @since 1.0.1
 * @category Boolean
 * @param {any} value JSON , Array and String
 * @returns {boolean} Returns true or false
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    const typeofvalue = getTypeofInternal(value);

    const invalidList = [
        'null',
        'undefined'
    ];

    if (typeofvalue === "json" || typeofvalue === "array") {

        return count(value, true) === zero;

    }
    if (typeofvalue === "number") {

        return value === zero;

    }

    if (indexOfExist(invalidList, typeofvalue)) {

        return true;

    }

    return (/^\s*$/gmi).test(value);

}
module.exports=isEmpty;

