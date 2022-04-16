export default insert;
/**
 * Insert Value
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Json or array
 * @param {any} value Data you want to insert
 * @returns {any} Returns Json or array
 * @example
 * var ss = {"A":1}
 * insert(ss,{'as':1})
 * // => {A: 1, as: 1}
 */
declare function insert(objectValue: any, value: any): any;
