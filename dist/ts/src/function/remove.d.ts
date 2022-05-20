export default remove;
/**
 * Remove
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Json or array
 * @param {number} value if objectValue, json is must be object or array index you want to remove
 * @param {number} value2 Last row in index
 * @returns {any[]} Returns the total.
 * @example
 *
 * remove([1,2,3],0 )
 *=>[2, 3]
 */
declare function remove(objectValue: any, value: number, value2: number): any[];
