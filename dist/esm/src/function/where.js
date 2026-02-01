import whereLoopExecution from '../core/whereLoopExecution.js';

import curryArg from '../core/curryArg.js';

import {two} from '../variable/defaultValue.js';

/**
 * Get the value in array the value in json given the search value was in json
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValueWhere Data you want to search in key
 * @param {any=} objectValue Json to Array
 * @returns {any} Return either Json to Array.
 * @example
 *
 * where({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 * where([{"s1":{"s2":2}},{"s1":{"s2":3}}],{"s1.s2":2})
 *=>[{"s1":{"s2":2}}]
 */
function where (objectValueWhere, objectValue) {

    return curryArg(function (rawObjectValueWhere, rawObjectValue) {

        return whereLoopExecution(rawObjectValueWhere, rawObjectValue, true, 'where');

    }, [
        objectValueWhere,
        objectValue
    ], two);

}
export default where;

