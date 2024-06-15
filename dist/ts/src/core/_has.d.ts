export default _has;
/**
 * Create a separate has inside core folder
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value Either JSON or Array
 * @param {any=} key For key or index of data
 * @returns {boolean} Returns true or false.
 * @example
 *
 * _has({'as':1}, 'as')
 * // => true
 */
declare function _has(value: any, key?: any | undefined): boolean;
