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
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        .replace(/([-_.\s]+)/g, ' ')
        .toLowerCase();

}
module.exports=stringSplit;
