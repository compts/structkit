export default map;
/**
 * To map the value of json ot array
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any=} func Callback function
 * @returns {null} Return map either JSON or Array
 * @example
 *
 * map([1,2],function(value) { return value+2 } )
 *=> [3, 4]
 */
declare function map(objectValue: any, func?: any | undefined): null;
