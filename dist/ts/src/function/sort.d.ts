export default sort;
/**
 * Sort
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Array
 * @param {any} order True for ascend then false for descend
 * @param {any} func Callback function or sort type
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
declare function sort(objectValue: any, order: any, func: any): any[];
