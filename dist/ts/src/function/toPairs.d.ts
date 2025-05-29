export default toPairs;
/**
 *  Converts an object into an array of key-value pairs. if the value is nested object, it will be converted to an array of key-value pairs recursively.
 *
 * @since 1.4.87
 * @category Condition
 * @param {any} value First number
 * @returns {any[]} Returns array
 * @example
 *
 * toPairs({"s":1,"ss":{"a":2}})
 * // => [["s",1],["ss",["a",2]]]
 */
declare function toPairs(value: any): any[];
