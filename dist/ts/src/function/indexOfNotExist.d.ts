export default indexOfNotExist;
/**
 * Check index of array Not or exist
 *
 * @since 1.4.1
 * @category Predicate
 * @param {any=} value Value for array lookup
 * @param {any[]=} arrayObject Array
 * @returns {boolean} Return boolean.
 * @example
 *
 * indexOfNotExist(32, [312])
 * // => true
 */
declare function indexOfNotExist(value?: any | undefined, arrayObject?: any[] | undefined): boolean;
