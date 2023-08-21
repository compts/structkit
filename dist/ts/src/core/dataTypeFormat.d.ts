export default dataNumberFormat;
/**
 * Where Loop Execution
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} regexp The second number in an addition.
 * @param {object} defaultVariable The second number in an addition.
 * @param {function} nullReplacement The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * whereLoopExecution({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 */
declare function dataNumberFormat(regexp: object, defaultVariable: object, nullReplacement: Function): any[] | object;
