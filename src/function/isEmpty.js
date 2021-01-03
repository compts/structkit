/**
 * Is empty
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    return (/^\s*$/gmi).test(value);

}
export default isEmpty;
