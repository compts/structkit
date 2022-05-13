
/**
 * Where Loop Execution
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * whereLoopExecution({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 */
function stringSplit (value) {

    return value.toLowerCase().replace(/([-_.\s]{1,})/g, ' ');

}
export default stringSplit;

