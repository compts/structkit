export default append;
/**
 * Append data for json and array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The data either json or array
 * @param {any} val Value for array index and json
 * @param {any=} key Json key
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
declare function append(objectValue: any, val: any, key?: any | undefined): any;
