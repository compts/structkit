export default whereLoopExecution;
/**
 * Where Loop Execution
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} whr Data for lookup
 * @param {object} jsn Json or array that you want to dissect
 * @param {function} func The second number in an addition.
 * @param {boolean} isExist The second number in an addition.
 * @param {string} types The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * whereLoopExecution({"s1":1},{"s1":1,"s2":1})
 *=>{"s1":1,"s2":1}
 */
declare function whereLoopExecution(whr: object, jsn: object, func: Function, isExist: boolean, types: string): any[] | object;
