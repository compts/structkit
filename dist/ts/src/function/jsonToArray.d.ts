export default jsonToArray;
/**
 * Json To Array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Json
 * @param {string} value Search key or index.
 * @returns {boolean} Returns Array
 * @example
 *
 * jsonToArray({"a":{"a":2},"b":{"a":3}},"a")
 * => [2, 3]
 */
declare function jsonToArray(objectValue: any, value: string): boolean;
