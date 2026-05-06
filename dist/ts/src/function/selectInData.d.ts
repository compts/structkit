export default selectInData;
/**
 * Selecting multiple search data using `getData` logic in the loop
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} whereValue Collection or json where `key` as suggested name of the key then `value` your target data, take a note on `value` it also supported nested key structure
 * @param {any} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * selectInData({"ss":"s"}, {"s":1})
 *=> {"ss":1}
 */
declare function selectInData(whereValue: any, objectValue: any): any;
