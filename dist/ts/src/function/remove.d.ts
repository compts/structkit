export default remove;
/**
 * Remove data in either JSON or Array using key or woth value
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Json or array
 * @param {any} value if objectValue, json is must be object or array index you want to remove
 * @param {number=} value2 Last row in index
 * @returns {any[]} Returns the total.
 * @example
 *
 * remove([1,2,3],0 )
 *=>[2, 3]
 */
declare function remove(objectValue: any, value: any, value2?: number | undefined): any[];
