import toDouble from './toDouble.mjs';

import {ten} from '../variable/defaultValue.mjs';

/**
 * Random Decimal
 *
 * @since 1.0.1
 * @category Math
 * @param {number} value Int or Double value type
 * @param {number=} precision limit decimal
 * @returns {number} Returns the total.
 * @example
 *
 * roundDecimal(11.1111111,3 )
 *=>11.111
 */
function roundDecimal (value, precision) {

    const jsn=toDouble(value);

    const multiplier = ten**precision;

    return Math.trunc(jsn * multiplier) / multiplier;

}
export default roundDecimal;

