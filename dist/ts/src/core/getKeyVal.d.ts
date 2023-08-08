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
 * getKeyVal([1,2],"first_index")
 *=>{"key":1,"value":1}
 */
declare function getKeyVal(jsn: object, typ: boolean): any[] | object;
