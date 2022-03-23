/**
 * Repeat
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @param {number} valueRepetion The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * repeat("s",1 )
 *=>'ss'
 */
function repeat (value, valueRepetion) {

    const emptyDefaultValue=0;
    const onceDefaultValue=1;
    const nm_rpt=valueRepetion||emptyDefaultValue;
    const nm_str=value||"";

    if (nm_rpt>emptyDefaultValue) {

        return new Array(nm_rpt+onceDefaultValue).join(nm_str);

    }

    return "";

}
export {repeat};

