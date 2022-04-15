const getTypeof = require('./getTypeof');

const count = require('./count');


/**
 * Check if data is empty
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    const zero =0;

    if (getTypeof(value) === "json" || getTypeof(value) === "array") {

        return count(value, true)===zero;

    }

    return (/^\s*$/gmi).test(value);

}
module.exports=isEmpty;

