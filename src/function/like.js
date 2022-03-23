const whereLoopExecution = require('../core/whereLoopExecution');


/**
 * Like
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {any} objectValueWhere The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * where({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 */
function like (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, true, 'like');

}
module.exports=like;

