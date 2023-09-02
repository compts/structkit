export default asyncReplace;
/**
 * Async replace
 *
 * @since 1.3.1
 * @category Utility
 * @param {any} value String data
 * @param {any} search Regexp or string to look for match
 * @param {Function|String=} toReplace Replace value.
 * @returns {Promise<string>} String
 * @example
 *
 * asyncReplace("asd",/s/g,"@")
 * // => Promise{<fulfilled>: 'a@d'}
 */
declare function asyncReplace(value: any, search: any, toReplace?: (Function | string) | undefined): Promise<string>;
