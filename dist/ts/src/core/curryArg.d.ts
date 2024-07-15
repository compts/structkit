export default curryArg;
/**
 * Create your curry function
 *
 * @since 1.4.8
 * @category Function
 * @param {any} fn Any data you want to check its property
 * @param {any[]} args Any data you want to check its property
 * @param {number=} NoDefaultArgs Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * curryArg(function(){}, [])
 * => array
 */
declare function curryArg(fn: any, args: any[], NoDefaultArgs?: number | undefined): string;
