export default isJson;
/**
 * Is Json valid format
 *
 * @since 1.3.1
 * @category Relation
 * @param {any} value Value you want to check JSON is Valid
 * @param {string=} valueType Get value type
 * @returns {any} Returns true or false if valid json format
 * @example
 *
 * isJson('{}' )
 *=> true
 */
declare function isJson(value: any, valueType?: string | undefined): any;
