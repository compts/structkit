export default calculate;
/**
 * Logic in convert string to compute, similar on how the calculator works
 *
 * @since 1.4.8
 * @category Logic
 * @param {string} formula Formula you want to execution, it follows the idea of algebraic expression concept
 * @param {any=} args Object argument that to fill in variable define at algbraic expression
 * @returns {number|any} Returns the total.
 * @example
 *
 * calculate('1+1')
 *=> 2
 * calculate('1+as',{as:1})
 *=> 2
 */
declare function calculate(formula: string, args?: any | undefined): number | any;
