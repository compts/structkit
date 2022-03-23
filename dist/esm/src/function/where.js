import whereLoopExecution from '../core/whereLoopExecution';


/**
 * Where
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {any} objectValueWhere The second number in an addition.
 * @param {any} func The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * where({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 */
function where (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, true, 'where');

}
export {where};

