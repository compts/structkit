import add from './add';

import {zero} from '../core/defaultValue';

import isEmpty from './isEmpty';

import baseReduce from '../core/baseReduce';

/**
 * Array Sum
 *
 * @since 1.0.1
 * @category Math
 * @param {number[]} arrayObject Array in number
 * @param {number=} delimeter decimal point and default value is 4
 * @returns {number} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 */
function arraySum (arrayObject, delimeter) {

    const defaultLimitDecimal = 0;
    const arrayObjects=arrayObject||[];
    const delimeters=delimeter||defaultLimitDecimal;

    const sum = baseReduce(zero, arrayObjects, add);

    return isEmpty(delimeters)
        ? parseInt(sum)
        :sum.toFixed(delimeters);

}
export default arraySum;

