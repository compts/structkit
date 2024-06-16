export default curryArg;
/**
 * Get type of the variable
 *
 * @since 1.4.8
 * @category String
 * @param {any} fn Any data you want to check its property
 * @param {any[]} args Any data you want to check its property
 * @param {number=} NoDefaultArgs Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * curryArgNone(function(){}, [])
 * => array
 */
declare function curryArg(fn: any, args: any[], NoDefaultArgs?: number | undefined): string;
