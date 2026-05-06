export default baseAppend;
/**
 * Append data for json and array
 *
 * @since 1.4.8
 * @category Any
 * @param {any} objectValue The data either json or array
 * @param {any} val Value for array index and json
 * @param {any=} key Json key
 * @returns {any} Returns the total.
 * @example
 *
 * baseAppend({'as':1}, 'as',2)
 * // => {'as':2}
 */
declare function baseAppend(objectValue: any, val: any, key?: any | undefined): any;
