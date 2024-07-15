export default arraySum;
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
 * arraySum([1,2])
 * // => 3
 */
declare function arraySum(arrayObject: number[], delimeter?: number | undefined): number;
