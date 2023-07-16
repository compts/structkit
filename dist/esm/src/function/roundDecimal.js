import count from './count';

/**
 * Random Decimal
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} value Int or Double value type
 * @param {number} maxValue limit decimal
 * @returns {number} Returns the total.
 * @example
 *
 * roundDecimal(11.1111111,3 )
 *=>11.11
 */
function roundDecimal (value, maxValue) {

    const emptyDefaultValue=0;
    const onceDefaultValue=1;
    const twoDefaultValue=2;
    const tenDefaultValue=10;
    const jsn=value||emptyDefaultValue;
    const str_dec=jsn.toString().split(".");
    const s_dmin=0;
    const s_dmax=maxValue||twoDefaultValue;

    if (count(str_dec)===twoDefaultValue) {

        const p_cnts=count(str_dec[onceDefaultValue].toString().split(""));
        const delmts=p_cnts<=s_dmin
            ?s_dmin
            :s_dmax;
        const dec_s=tenDefaultValue**delmts;

        return Math.round(parseFloat(jsn*dec_s))/dec_s;

    }

    return jsn;

}
export default roundDecimal;

