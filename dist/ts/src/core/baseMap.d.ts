export default baseMap;
/**
 * To map the value of json or array
 *
 * @since 1.4.8
 * @category Collection
 * @param {any=} func Callback function
 * @param {any} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * baseMap([1,2],function(value) { return value+2 } )
 *=> [3, 4]
 */
declare function baseMap(func?: any | undefined, objectValue: any): any;
