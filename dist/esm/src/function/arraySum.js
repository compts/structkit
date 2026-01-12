import add from './add.js';

import {zero} from '../variable/defaultValue.js';

import isEmpty from './isEmpty.js';

import baseReduce from '../core/baseReduce.js';

/**
 * Array sum of value
 *
 * @since 1.0.1
 * @category Math
 * @param {number[]} arrayObject Array of number
 * @param {number=} delimeter decimal point and default value is 0
 * @returns {number} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 * arraySum([1,2])
 * // => 3
 */
function arraySum (arrayObject, delimeter) {

    const arrayObjects=arrayObject||[];
    const delimeters=delimeter||zero;

    const sum = baseReduce(add, zero, arrayObjects);

    return isEmpty(delimeters)
        ? parseInt(sum)
        :sum.toFixed(delimeters);

}
export default arraySum;

