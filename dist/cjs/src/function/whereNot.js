const whereLoopExecution = require('../core/whereLoopExecution');


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
 * whereNot({"s1":1,"s2":1},{"s1":2})
 *=>{"s1":1,"s2":1}
 */
function whereNot (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, false, 'where');

}
module.exports=whereNot;;


