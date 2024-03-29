
import repeat from './repeat';

import count from './count';

/**
 * Number format
 *
 * @since 1.0.1
 * @category Math
 * @param {array|object} objectValue The data you want to format
 * @param {string} value1 The start number.
 * @param {string=} value2 The end number.
 * @returns {null} Return format number
 * @example
 *
 * numberFormat(1,1,2)
 *=>1.00
 */
function numberFormat (objectValue, value1, value2) {

    const incrementDefaultValue=1;
    const emptyDefaultValue=0;
    const threeDefaultValue=3;
    const valueZero=value2||emptyDefaultValue;
    const objectValueEvaluate=objectValue.toString();
    const splt_dec=objectValueEvaluate.split(".");
    const reg_exp=new RegExp("(\\d)(?=(\\d{"+(value1||threeDefaultValue)+"})+(?:\\.\\d+)?$)", "g");
    const num_deli=splt_dec[emptyDefaultValue].replace(reg_exp, "$1, ");
    let ssd_va=num_deli+count(splt_dec)>incrementDefaultValue
        ?"."+splt_dec[incrementDefaultValue]
        :"";

    if (valueZero>emptyDefaultValue) {

        const str_dec=ssd_va.split(".");

        if (count(str_dec)===incrementDefaultValue) {

            ssd_va=ssd_va+"."+repeat("0", valueZero);

        } else {

            const dec_num=str_dec[incrementDefaultValue];

            if (dec_num.length >= valueZero) {

                ssd_va=str_dec[emptyDefaultValue]+"."+dec_num.substr(emptyDefaultValue, valueZero);

            } else {

                ssd_va=str_dec[emptyDefaultValue]+"."+dec_num+repeat("0", dec_num.length-valueZero);

            }

        }

    }

    return ssd_va;

}
export default numberFormat;

