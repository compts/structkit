export default pipe;
/**
 * Perform left to right function composition. first arguemnt will be default value
 *
 * @since 1.4.86
 * @category Condition
 * @param {...any?} arg Arguments in function
 * @returns {any} Returns any value.
 * @example
 *
 * pipe(Math.pow,add(1))(11,2)
 * // => 122
 */
declare function pipe(...arg: (any | null)[]): any;
