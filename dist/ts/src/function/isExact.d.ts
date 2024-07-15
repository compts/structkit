export default isExact;
/**
 * Looking the data in JSON and Array base on object value
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} whereValue Json or Array
 * @param {any} objectValue1 Json or Array for lookup to objectValue1
 * @param {boolean=} isExist Default value is True
 * @returns {boolean} Returns the boolean if the has the value you are looking at.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 *
 * isExact({"s1":{"s2":2}},{"s1:s2":2})
 * // => true
 */
declare function isExact(whereValue: any, objectValue1: any, isExist?: boolean | undefined): boolean;
