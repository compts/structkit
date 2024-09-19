const arrayRepeat = require('./arrayRepeat');

/**
 * Repeat string value
 *
 * @since 1.0.1
 * @category String
 * @param {string=} value String you want to duplicate
 * @param {number=} valueRepetion how many times you want to repeate
 * @returns {string} Return in string or number.
 * @example
 *
 * repeat("s",1 )
 *=>'ss'
 */
function repeat (value, valueRepetion) {

    const emptyDefaultValue=0;
    const nm_rpt=valueRepetion||emptyDefaultValue;
    const nm_str=value||"";

    return arrayRepeat(nm_str, nm_rpt).join("");

}
module.exports=repeat;

