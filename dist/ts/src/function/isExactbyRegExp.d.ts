export default isExactbyRegExp;
/**
 * Looking the data in JSON and Array base on object value with the help regexp
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} objectValue1 Either Json or array
 * @param {string} objectValue2 use as lookup data in data
 * @returns {boolean} Returns the boolean if the has the value with the help regexp you are looking at.
 * @example
 *
 * isExactbyRegExp('')
 * // => false
 */
declare function isExactbyRegExp(objectValue1: string, objectValue2: string): boolean;
