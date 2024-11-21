export default calculate;
/**
 * Logic in convert string or number to compute
 *
 * @since 1.4.8
 * @category Seq
 * @param {string} formula The second number in an addition.
 * @param {any=} args The second number in an addition.
 * @returns {number|any} Returns the total.
 * @example
 *
 * calculate('1+1')
 *=> 2
 * calculate('1+as',{as:1})
 *=> 2
 */
declare function calculate(formula: string, args?: any | undefined): number | any;
