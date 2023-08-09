export default arraySlice;
/**
 * To get value of array given start and end(optional) of the array
 * This is a rename of delimiter
 *
 * @since 1.3.1
 * @category Seq
 * @param {any} objectValue Array
 * @param {number=} min Minumum of 2
 * @param {number=} max Maximum base on array count
 * @returns {any[]} Returns the total.
 * @example
 *
 * arraySlice([1,2],1)
 * // => [2]
 *
 * arraySlice([1,2,3,4],2,4)
 * // => [2, 3, 4]
 */
declare function arraySlice(objectValue: any, min?: number | undefined, max?: number | undefined): any[];
