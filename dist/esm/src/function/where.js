import whereLoopExecution from '../core/whereLoopExecution';

/**
 * Get the value in array the value in json given the search value was in json
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Json to Array
 * @param {any} objectValueWhere Data you want to search in key
 * @param {Function=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * where({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 */
function where (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, true, 'where');

}
export default where;

