const count = require('./count');
const {zero, one, two, ten} = require("../variable/defaultValue");

/**
 * Random Decimal
 *
 * @since 1.0.1
 * @category Math
 * @param {number} value Int or Double value type
 * @param {number=} maxValue limit decimal
 * @returns {number} Returns the total.
 * @example
 *
 * roundDecimal(11.1111111,3 )
 *=>11.11
 */
function roundDecimal (value, maxValue) {

    const jsn=value||zero;
    const str_dec=jsn.toString().split(".");
    const s_dmin=0;
    const s_dmax=maxValue||two;

    if (count(str_dec) === two) {

        const p_cnts=count(str_dec[one].toString().split(""));
        const delmts=p_cnts <= s_dmin
            ?s_dmin
            :s_dmax;
        const dec_s=ten**delmts;

        return Math.round(parseFloat(jsn*dec_s))/dec_s;

    }

    return jsn;

}
module.exports=roundDecimal;

