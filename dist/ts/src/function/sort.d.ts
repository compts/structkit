export default sort;
/**
 * Sort array
 *
 * @since 1.0.1
 * @category Array
 * @param {any[]} objectValue List of array you want to sort
 * @param {boolean=} order True for ascend then false for descend
 * @param {string=} type Callback function or sort type [any, lowercase, uppercase]
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
declare function sort(objectValue: any[], order?: boolean | undefined, type?: string | undefined): any[];
