export default insert;
/**
 * Insert value in Json object or array
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Either Json or array
 * @param {any} value Data you want to insert
 * @returns {null} Returns null
 * @example
 * var ss = {"A":1}
 * insert(ss,{'as':1})
 * // => {A: 1, as: 1}
 */
declare function insert(objectValue: any, value: any): null;
