import whereLoopExecution from '../core/whereLoopExecution.js';

import curryArg from '../core/curryArg.js';

import {two} from '../variable/defaultValue.js';

/**
 * Searching the data either in array or json object to get similar value of data
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValueWhere Data you want to search that is identical to key of object or array
 * @param {any} objectValue Json or Array
 * @param {any=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * like({"s1":1}, {"s1":1,"s2":1})
 *=>{s1: 1, s2: 1}
 */
function like (objectValueWhere, objectValue, func) {

    return curryArg(function (rawObjectValueWhere, rawObjectValue, rawFuncfunc) {

        return whereLoopExecution(rawObjectValueWhere, rawObjectValue, rawFuncfunc, true, 'like');

    }, [
        objectValueWhere,
        objectValue,
        func
    ], two);

}
export default like;

