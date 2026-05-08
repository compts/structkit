export default parseJson;
/**
 * Parse string to JSON object with type conversion and correction
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} value Any type you want to convert to json object
 * @param {any=} config Option for parse json, it has disableCorrection to disable the correction and validation of json string, invalidDefaultValue to set default value if the string is invalid or not string and throwError to determine if it will throw error or just return default value if the string is invalid or not string
 * @returns {any} Returns the json object.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
declare function parseJson(value: any, config?: any | undefined): any;
