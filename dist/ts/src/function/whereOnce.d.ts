export default whereOnce;
/**
 * Get the value in array or json given in only one return the search value was in json
 *
 * @since 1.4.8.7
 * @category Collection
 * @param {any} objectValueWhere Data you want to search in key
 * @param {any} objectValue Json to Array
 * @param {Function=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * whereOnce({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 * whereOnce([{"s1":{"s2":2}},{"s1":{"s2":3}}],{"s1.s2":2})
 *=>[{"s1":{"s2":2}}]
 */
declare function whereOnce(objectValueWhere: any, objectValue: any, func?: Function | undefined): any;
