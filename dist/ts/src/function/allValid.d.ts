export default allValid;
/**
 * In array, you need to check all value is true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...any?} arg List of value you need to check if all true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
declare function allValid(...arg: (any | null)[]): boolean;
