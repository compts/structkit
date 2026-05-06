export default reduce;
/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Function
 * @param {any} func Callback function for how to map the data
 * @param {any} defaultValue Starting value that you want to use as reference
 * @param {any[]} listData Array value that you want to map
 * @returns {any} Return redue value
 * @example
 *
 * reduce((total,value)=>total+value, 2,[1,2])
 * // => 5
 */
declare function reduce(func: any, defaultValue: any, listData: any[]): any;
//# sourceMappingURL=reduce.d.ts.map