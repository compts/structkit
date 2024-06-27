const add = require('./add');
const {zero} = require("../core/defaultValue");
const isEmpty = require('./isEmpty');


const baseReduce = require("../core/baseReduce");

/**
 * Array Sum
 *
 * @since 1.0.1
 * @category Math
 * @param {number[]} arrayObject Array in number
 * @param {number=} delimeter decimal point and default value is 0
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
module.exports=arraySum;

