export default selectInData;
/**
 * Selecting multiple search data using `getData` logic in the loop
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} whereValue where clause for you to merge the two set of data
 * @param {any} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * selectInData({"ss":"s"}, {"s":1})
 *=> {"ss":1}
 */
declare function selectInData(whereValue: any, objectValue: any): any;
