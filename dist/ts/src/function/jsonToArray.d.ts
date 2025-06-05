export default jsonToArray;
/**
 * Convert Json To Array base on search value you provide,the search value  will only look for value in json.
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Json
 * @param {string} value Search key or index.
 * @returns {any} Returns Array
 * @example
 *
 * jsonToArray({"a":{"a":2},"b":{"a":3}},"a")
 * => [2, 3]
 */
declare function jsonToArray(objectValue: any, value: string): any;
