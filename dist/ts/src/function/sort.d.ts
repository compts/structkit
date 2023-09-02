export default sort;
/**
 * Sort array
 *
 * @since 1.0.1
 * @category Array
 * @param {any} objectValue Array
 * @param {boolean=} order True for ascend then false for descend
 * @param {any=} func Callback function or sort type
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
declare function sort(objectValue: any, order?: boolean | undefined, func?: any | undefined): any[];
