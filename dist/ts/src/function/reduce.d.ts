export default reduce;
/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Core
 * @param {any} defaultValue Array in number
 * @param {any[]} listData decimal point and default value is
 * @param {any} func The data you want to map
 * @returns {number} Returns the total.
 * @example
 *
 * reduce(2,[1,2],(total,value)=>total+value)
 * // => 5
 */
declare function reduce(defaultValue: any, listData: any[], func: any): number;
