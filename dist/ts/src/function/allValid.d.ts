export default allValid;
/**
 * In array, you need to check all value is true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...boolean?} arg First number
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
declare function allValid(...arg: (boolean | null)[]): boolean;
