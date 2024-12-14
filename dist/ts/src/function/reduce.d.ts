export default reduce;
/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Core
 * @param {any} defaultValue Starting value that you want to use as reference
 * @param {any[]} listData Array value that you want to map
 * @param {any} func Callback function for how to map the data
 * @returns {number} Return redue value
 * @example
 *
 * reduce(2,[1,2],(total,value)=>total+value)
 * // => 5
 */
declare function reduce(defaultValue: any, listData: any[], func: any): number;
