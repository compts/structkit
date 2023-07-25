export default isExact;
/**
 * Is Exact
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} objectValue1 Json or Array
 * @param {string} objectValue2 Json or Array for lookup to objectValue1
 * @param {boolean=} isExist Default value is True
 * @returns {boolean} Returns the total.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 */
declare function isExact(objectValue1: string, objectValue2: string, isExist?: boolean | undefined): boolean;
