export default mergeInWhere;
/**
 * Merging two json/array object with the help of where clause
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge
 * @param {any} whereValue where clause for you to merge the two set of data
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeInWhere({"s":1},{"ss":1})
 *=> {"s":1,"ss":1}
 */
declare function mergeInWhere(objectValue: any, mergeValue: any, whereValue: any): any;
