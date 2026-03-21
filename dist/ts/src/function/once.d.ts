export default once;
/**
 * Check if data was executed once
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} func Any value type, take a note that it also supported curry, then please check it properly use in our doc
 * @returns {any} Returns filled value from its index
 * @example
 *
 * once('as','as2',{'as':1})
 * // => 1
 */
declare function once(func: any): any;
