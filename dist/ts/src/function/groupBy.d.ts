export default groupBy;
/**
 * To group the value of json or array
 *
 * @since 1.4.8
 * @category Collection
 * @param {any=} func Callback function
 * @param {any} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * groupBy(function (value) { return value % 2}, [1,2,3,4,5,6,7])
 *=> {0:[2,4,6], 1:[1,3,5,7]}
 */
declare function groupBy(func?: any | undefined, objectValue: any): any;
