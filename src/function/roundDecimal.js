const count = require('./count');


/**
 * Random Decimal
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} value The second number in an addition.
 * @param {number} minValue The second number in an addition.
 * @param {number} maxValue The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * roundDecimal([1,2,3],1,2 )
 *=>'{}'
 */
function roundDecimal (value, minValue, maxValue) {

    const emptyDefaultValue=0;
    const onceDefaultValue=1;
    const twoDefaultValue=2;
    const tenDefaultValue=10;
    const jsn=value||emptyDefaultValue;
    const str_dec=jsn.toString().split(".");
    const s_dmin=minValue||onceDefaultValue;
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
module.exports=roundDecimal;

