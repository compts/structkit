export default baseReduce;
/**
 * Base reduce
 *
 * @since 1.4.8
 * @category Core
 * @param {any} defaultValue Array in number
 * @param {any[]} listData decimal point and default value is
 * @param {any} func The data you want to map
 * @returns {number} Returns the total.
 * @example
 *
 * baseReduce(2,[1,2],)
 * // => 3.00
 */
declare function baseReduce(defaultValue: any, listData: any[], func: any): number;
