/**
 * Split string for special cases
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value String to split
 * @returns {string} Returns the total.
 * @example
 *
 * stringSplit("split-this-string")
 *=>"split this string"
 */
function stringSplit (value) {

    return value.trim()
        .toLowerCase()
        .replace(/([-_.\s]{1,})/g, ' ');

}
export default stringSplit;

