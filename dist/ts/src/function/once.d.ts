export default once;
/**
 * Check if data was executed once
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} key Either JSON or array
 * @param {any=} defaultValue Check the key of value
 * @param {any=} objectValue if value not exist, this value will be return
 * @returns {any} Returns filled value from its index
 * @example
 *
 * once('as','as2',{'as':1})
 * // => 1
 */
declare function once(key: any, defaultValue?: any | undefined, objectValue?: any | undefined): any;
