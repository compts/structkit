export default arrayConcat;
/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Array
 * @param {...any?} arg First array
 * @returns {any[]} Returns the array.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
declare function arrayConcat(...arg: (any | null)[]): any[];
