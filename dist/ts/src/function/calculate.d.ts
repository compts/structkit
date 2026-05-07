export default calculate;
/**
 * Logic in convert string to compute, similar on how the calculator works, using pemdas concept and also support for factorial, percentage, absolute value and square root or any algebraic expression that can be represented in string. It also support for variable in formula, you just need to fill the variable with value in the second argument as json.
 *
 * @since 1.4.8
 * @category Math
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
