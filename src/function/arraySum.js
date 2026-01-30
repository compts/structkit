const add = require('./add');
const {zero, ten} = require("../variable/defaultValue");
const isEmpty = require('./isEmpty');


const baseReduce = require("../core/baseReduce");

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
        :truncateToDecimalPlaces(sum, precisions);

}

/**
 * Move decimal point to fixed position
 *
 * @since 1.4.9
 * @category Math
 * @param {number} num Array of number
 * @param {number=} precision decimal point and default value is 0
 * @returns {number} Returns the total.
 * @example
 *
 * truncateToDecimalPlaces(3.123, 2)
 * // => 3.12
 */
function truncateToDecimalPlaces (num, precision) {

    const multiplier = ten**precision;


    return Math.trunc(num * multiplier) / multiplier;

}
module.exports=arraySum;

