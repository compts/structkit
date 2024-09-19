export default count;
/**
 * Array Count
 *
 * @since 1.0.1
 * @category Math
 * @param {any=} objectValue Json or array
 * @param {boolean=} json_is_empty_check If data is json, it will check its map data
 * @returns {number} Returns the total.
 * @example
 *
 * count([1,2])
 * // => 2
 *
 * count({"s" :1, "s2": 2}, true)// Counting the object inside, you must this to true
 * // => 2
 */
declare function count(objectValue?: any | undefined, json_is_empty_check?: boolean | undefined): number;
