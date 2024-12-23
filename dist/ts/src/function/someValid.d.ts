export default someValid;
/**
 * In array, you need to check all value atleast one true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...any?} arg List of value you need to check if some are true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * someValid(true, false)
 * // => true
 */
declare function someValid(...arg: (any | null)[]): boolean;
