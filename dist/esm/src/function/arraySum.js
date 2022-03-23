import each from './each';
import has from './has';


/**
 * Array Sum
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} arrayObject The second number in an addition.
 * @param {number} delimeter The second number in an addition.
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

    return sum.toFixed(delimeters);

}
export default arraySum;

