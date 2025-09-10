import whereLoopExecution from '../core/whereLoopExecution.js';

import curryArg from '../core/curryArg.js';

import {zero, two} from '../core/defaultValue.js';

/**
 *  Get the value in array the value in json that should not in search value of json
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Json to Array
 * @param {any} objectValueWhere Data that you exlude in search
 * @param {Function=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * whereNot([{"s1":1,"s2":1},{"s1":2,"s2":2}],{"s1":1})
 *=>[{"s1":2,"s2":2}]
 * whereNot([{"s1":{"s2":2}},{"s1":{"s2":3}}],{"s1.s2":2})
 *=>[{"s1":{"s2":3}}]
 */
function whereNot (objectValue, objectValueWhere, func) {

    return curryArg(function (rawObjectValue, rawObjectValueWhere, rawFunc) {

        return whereLoopExecution(rawObjectValue, rawObjectValueWhere, rawFunc, false, 'where');

    }, [
        objectValue,
        objectValueWhere,
        func
    ], two);

}
export default whereNot;

