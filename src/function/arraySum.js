const each = require('./each');

const has = require('./has');

const isEmpty = require('./isEmpty');


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

    let sum=0;
    const defaultLimitDecimal = 3;
    const arrayObjects=arrayObject||[];
    const delimeters=delimeter||defaultLimitDecimal;

    each(arrayObjects, function (ak, av) {

        if (has(av)) {

            sum+=parseFloat(av);

        }

    });

    return isEmpty(delimeters)
        ? parseInt(sum)
        :sum.toFixed(delimeters);

}
module.exports=arraySum;

