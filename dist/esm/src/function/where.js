import whereLoopExecution from '../core/whereLoopExecution.js';

import curryArg from '../core/curryArg.js';

import {zero, two} from '../core/defaultValue.js';

/**
 * Get the value in array the value in json given the search value was in json
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Json to Array
 * @param {any} objectValueWhere Data you want to search in key
 * @param {Function=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * where({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 * where([{"s1":{"s2":2}},{"s1":{"s2":3}}],{"s1.s2":2})
 *=>[{"s1":{"s2":2}}]
 */
function where (objectValue, objectValueWhere, func) {

    return curryArg(function (rawObjectValue, rawObjectValueWhere, rawFunc) {

        return whereLoopExecution(rawObjectValue, rawObjectValueWhere, rawFunc, true, 'where');

    }, [
        objectValue,
        objectValueWhere,
        func
    ], two);

}
export default where;

