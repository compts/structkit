export default mergeInWhere;
/**
 * Merging two json/array object with the help of where clause
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} whereValue where clause for you to merge the two set of data, where clause at `$1`  for `objectValue` and `$2`  for `mergeValue`
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeInWhere({"$1.id":"$2.id","$2.title":"test only"}, [{"s":23,"id":1}],[{"id":1,"title":"test only"}])
 *=> [{ "id":1, "s":23, "title":"test only"}]
 */
declare function mergeInWhere(whereValue: any, objectValue: any, mergeValue: any): any;
