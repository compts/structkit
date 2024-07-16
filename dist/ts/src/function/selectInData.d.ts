export default selectInData;
/**
 * Selecting multiple search data using `getData` logic in the loop
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} whereValue where clause for you to merge the two set of data
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * selectInData({"s":1},{"ss":"s"})
 *=> {"ss":1}
 */
declare function selectInData(objectValue: any, whereValue: any): any;
