export default equal;
/**
 * To check if its equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * equal('as', 'as')
 * // => true
 */
declare function equal(...args: (any | null)[]): boolean;
