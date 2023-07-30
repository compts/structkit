export default delimiter;
/**
 * Delimiter
 *
 * @since 1.3.1
 * @category Seq
 * @param {any} objectValue Array
 * @param {number=} min Delimiter in minumum of 2
 * @param {number=} max Delimiter in minumum base on array count
 * @returns {any[]} Returns the total.
 * @example
 *
 * delimiter([1,2],1)
 * // => [2]
 *
 * delimiter([1,2,3,4],2,4)
 * // => [2, 3, 4]
 */
declare function delimiter(objectValue: any, min?: number | undefined, max?: number | undefined): any[];
