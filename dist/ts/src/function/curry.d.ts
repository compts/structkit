export default curry;
/**
 * Create your own curry for your onw function
 *
 * @since 1.4.874
 * @category Function
 * @param {any=} fun Callback function
 * @param {number=} num Number of default arguments
 * @returns {any} Returns expected value from callback
 * @example
 *
 * asd = curry((test) =>{})
 * // => (test) =>{}
 */
declare function curry(fun?: any | undefined, num?: number | undefined): any;
