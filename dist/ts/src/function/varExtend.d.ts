export default varExtend;
/**
 * Var extend is use for cloning Json, Array or Object
 *
 * @since 1.0.1
 * @category Collection
 * @param {object} objectValue Json, Array or Object
 * @param {object} objectValueReplace Json, Array or Object that you want to assign to `objectValue`
 * @returns {array} Return Json or Array or Object.
 * @example
 *
 * varExtend({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
declare function varExtend(objectValue: object, objectValueReplace: object): any[];
