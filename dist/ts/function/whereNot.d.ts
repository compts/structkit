export default whereNot;
/**
 * Where Not
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Json to Array
 * @param {any} objectValueWhere Data you not want to search in key
 * @param {any} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * whereNot({"s1":1,"s2":1},{"s1":2})
 *=>{"s1":1,"s2":1}
 */
declare function whereNot(objectValue: any, objectValueWhere: any, func: any): any;
