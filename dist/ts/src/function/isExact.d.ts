export default isExact;
/**
 * Is Exact
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue1 Json or Array
 * @param {any} objectValue2 Json or Array for lookup to objectValue1
 * @param {boolean=} isExist Default value is True
 * @returns {boolean} Returns the total.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 */
declare function isExact(objectValue1: any, objectValue2: any, isExist?: boolean | undefined): boolean;
