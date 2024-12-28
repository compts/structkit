const whereLoopExecution = require('../core/whereLoopExecution');

/**
 * Searching the data either in array or json object to get similar value of data
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Json or Array
 * @param {any} objectValueWhere Data you want to search that is identical to key of object or array
 * @param {any=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * like({"s1":1,"s2":1},{"s1":1})
 *=>{s1: 1, s2: 1}
 */
function like (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, true, 'like');

}
module.exports=like;
