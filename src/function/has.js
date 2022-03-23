/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value The first number in an addition.
 * @param {any} key The second number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * has({'as':1}, 'as')
 * // => true
 */
function has (value, key) {

    if (typeof key==="undefined") {

        return value!==null && typeof value !=="undefined";

    }

    return Object.prototype.hasOwnProperty.call(value, key);

}
module.exports=has;

