const add = require('./add');
const {zero} = require("../variable/defaultValue");
const isEmpty = require('./isEmpty');


const baseReduce = require("../core/baseReduce");

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

    const sum = baseReduce(zero, arrayObjects, add);

    return isEmpty(delimeters)
        ? parseInt(sum)
        :sum.toFixed(delimeters);

}
module.exports=arraySum;

