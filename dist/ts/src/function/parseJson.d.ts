export default parseJson;
/**
 * Parse string to JSON object with type conversion and correction
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
