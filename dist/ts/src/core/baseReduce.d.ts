export default baseReduce;
/**
 * Base reduce
 *
 * @since 1.4.8
 * @category Core
 * @param {any} func The data you want to reduce in function
 * @param {any} defaultValue Array in number
 * @param {any[]} listData decimal point and default value is
 * @returns {any} Returns the aggregrated.
 * @example
 *
 * baseReduce((total,value)=>total+value, 2,[1,2])
 * // => 5
 */
declare function baseReduce(func: any, defaultValue: any, listData: any[]): any;
