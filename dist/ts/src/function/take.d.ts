export default take;
/**
 * Get the value from index zero until the last value
 *
 * @since 1.4.86
 * @category Math
 * @param {number} value First number, our first index will start at zero
 * @param {any[]|string} valueList Second number
 * @returns {number} Returns true or false.
 * @example
 *
 * take(1, [1])
 * // => 1
 */
declare function take(value: number, valueList: any[] | string): number;
