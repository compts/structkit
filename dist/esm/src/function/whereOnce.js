import whereLoopExecution from '../core/whereLoopExecution.js';

import curryArg from '../core/curryArg.js';

import {two} from '../variable/defaultValue.js';

/**
 * Get the value in array or json given in only one return the search value was in json
 *
 * @since 1.4.8.7
 * @category Collection
 * @param {any} objectValueWhere Data you want to search in key
 * @param {any} objectValue Json to Array
 * @param {Function=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * whereOnce({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 * whereOnce([{"s1":{"s2":2}},{"s1":{"s2":3}}],{"s1.s2":2})
 *=>[{"s1":{"s2":2}}]
 */
function whereOnce (objectValueWhere, objectValue, func) {

    return curryArg(function (rawObjectValueWhere, rawObjectValue, rawFunc) {

        return whereLoopExecution(rawObjectValueWhere, rawObjectValue, rawFunc, true, 'where_once');

    }, [
        objectValueWhere,
        objectValue,
        func
    ], two);

}
export default whereOnce;

