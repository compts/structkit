const has = require('./has');


/**
 * Check if data is undefined
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The first number in an addition.
 * @param {any} value1 The first number in an addition.
 * @param {any} value2 The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * ifUndefined({'as':1}, 'as','as2')
 * // => 1
 */
function ifUndefined (objectValue, value1, value2) {

    if (!has(value2)) {

        if (has(objectValue)) {

            return objectValue;

        }

        return value1;

    }

    if (has(objectValue, value1)) {

        return objectValue[value1];

    }

    return value2;

}
module.exports=ifUndefined;

