export default has;
/**
 * Check if object has value or null
 *
 * @since 1.0.1
 * @category Boolean
 * @param {any} value Either JSON or Array
 * @param {any=} key For key or index of data
 * @returns {boolean} Returns true or false.
 * @example
 *
 * has({'as':1}, 'as')
 * // => true
 */
declare function has(value: any, key?: any | undefined): boolean;
