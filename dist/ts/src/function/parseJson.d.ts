export default parseJson;
/**
 * Parse Json object
 *
 * @since 1.4.86
 * @category Collection
 * @param {string} value String you want to convert to
 * @param {any=} config The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
declare function parseJson(value: string, config?: any | undefined): any;
