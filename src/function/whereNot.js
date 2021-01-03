import whereLoopExecution from '../core/whereLoopExecution';

/**
 * Where Not
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue The second number in an addition.
 * @param {object} objectValueWhere The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * whereNot({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function whereNot (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, false);

}
export default whereNot;

