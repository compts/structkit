export default someValid;
/**
 * In array, you need to check all value atleast one true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...boolean?} arg First number
 * @returns {boolean} Returns true or false.
 * @example
 *
 * someValid(true, false)
 * // => true
 */
declare function someValid(...arg: (boolean | null)[]): boolean;
