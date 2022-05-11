export default isJson;
/**
 * Is Json valid
 *
 * @since 1.3.1
 * @category Seq
 * @param {string|object|array} value Value you want to check JSON is Valid
 * @param {string} valueType Get value type
 * @returns {any} Returns the total.
 * @example
 *
 * isJson('{}' )
 *=> true
 */
declare function isJson(value: string | object | any[], valueType: string): any;
