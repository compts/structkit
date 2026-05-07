export default parseJson;
/**
 * Parse from String to JSON object
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} value Any type you want to convert to json object
 * @param {any=} config Option you want to set in this function.
 * @returns {any} Returns the json object.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
declare function parseJson(value: any, config?: any | undefined): any;
