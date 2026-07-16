export default ifElse;
/**
 * If else condition logic, using curry callback, you now use this statement is function or objectt will if condition are met
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} cond Condition validation
 * @param {any} ifFunc if valid this function or arg will return
 * @param {any=} elseFunc else this function or arg will return
 * @returns {any} Returns the either ifFunc or elseFunc.
 * @example
 *
 * ifElse(__,(params,ss) => ss,(params,ss,s2) => {return s2)(true,1,2)
 * // => 1
 */
declare function ifElse(cond: any, ifFunc: any, elseFunc?: any | undefined): any;
