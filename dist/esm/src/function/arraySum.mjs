import add from './add.mjs';

import {zero} from '../variable/defaultValue.mjs';

import isEmpty from './isEmpty.mjs';

import roundDecimal from './roundDecimal.mjs';

import baseReduce from '../core/baseReduce.mjs';

/**
 * Array sum of value
 *
 * @since 1.0.1
 * @category Math
 * @param {number[]} arrayObject Array of number
 * @param {number=} precision decimal point and default value is 0
 * @returns {number} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 * arraySum([1,2])
 * // => 3
 */
function arraySum (arrayObject, precision) {

    const arrayObjects=arrayObject||[];
    const precisions=precision||zero;

    const sum = baseReduce(add, zero, arrayObjects);

    return isEmpty(precisions)
        ? parseInt(sum)
        :roundDecimal(sum, precisions);

}

export default arraySum;

