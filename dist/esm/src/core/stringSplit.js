/**
 * Split string for special cases
 *
 * @since 1.4.8
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
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([-_.\s]{1,})/g, ' ')
        .toLowerCase();

}
export default stringSplit;

