export default union;
/**
 * To create a new array that is the union of all the arrays passed as arguments. The union will contain only unique values.
 *
 * @since 1.4.7
 * @category Collection
 * @param {...any?} arg First number
 * @returns {any[]} Returns true or false.
 * @example
 *
 * union([1,2,3,4,7],[1,2,3,4,5,6,7,8])
 * // => [1, 2, 3, 4, 7, 5, 6, 8]
 */
declare function union(...arg: (any | null)[]): any[];
