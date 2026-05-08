import dataNumberFormat from '../core/dataTypeFormat.mjs';

import varExtend from './varExtend.mjs';

/**
 * To extract number in string and convert to double, it will also remove all none numeric
 *
 * @since 1.0.1
 * @category Number
 * @param {any} value Value you to convert in double
 * @param {any=} config Option you want to set in this function.
 * @returns {number} Return in double.
 * @example
 *
 * toDouble("100.1d1")
 *=>100.11
 */
function toDouble (value, config) {

    const zero = 0.00;

    const defaultConfig = varExtend({"decSeparator": "."}, config);

    if (defaultConfig.decSeparator !== ".") {

        const sepRegexp = new RegExp("("+defaultConfig.decSeparator+")", "g");

        value = value.replace(sepRegexp, ".");

    }

    return parseFloat(dataNumberFormat(/(\d[.]{0,})/g, zero, value === null
        ?zero
        :value));

}
export default toDouble;

