/**
 * Check if object has value
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value JSON or Array
 * @param {any} key For key or index of data
 * @returns {boolean} Returns true or false.
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

