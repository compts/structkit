export default getKeyVal;
/**
 * Get key value
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} jsn Json or Array
 * @param {boolean} typ Types of instruction
 * @returns {array|object} Expected return from instruction
 * @example
 *
 * getKeyVal({"s1":1,"s2":1},"key")
 *=>{"s1":1,"s2":1}
 */
declare function getKeyVal(jsn: object, typ: boolean): any[] | object;
