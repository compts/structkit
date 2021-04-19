import whereLoopExecution from '../core/whereLoopExecution';

/**
 * Like
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue The second number in an addition.
 * @param {object} objectValueWhere The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * where({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 */
function like (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, true, 'like');

}
export default like;
