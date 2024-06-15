export default has;
/**
 * Check if object has value or null
 *
 * @since 1.0.1
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * has({'as':1}, 'as')
 * // => true
 */
declare function has(...args: (any | null)[]): boolean;
