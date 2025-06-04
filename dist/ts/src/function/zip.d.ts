export default zip;
/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists
 *
 * @since 1.4.86
 * @category Array
 * @param {...any?} arg First number
 * @returns {any} Returns true or false.
 * @example
 *
 * zip([1],[2],[3])
 * // => [[1,2,3]]
 */
declare function zip(...arg: (any | null)[]): any;
