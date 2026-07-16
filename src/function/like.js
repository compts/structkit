const whereLoopExecution = require('../core/whereLoopExecution');
const curryArg = require("../core/curryArg");
const {two} = require("../variable/defaultValue");

/**
 * Searching the data either in array or json object to get similar value of data
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValueWhere Data you want to search that is identical to key of object or array
 * @param {any} objectValue Json or Array
 * @returns {any} Return either Json to Array.
 * @example
 *
 * like({"s1":1}, {"s1":1,"s2":1})
 *=>{s1: 1, s2: 1}
 */
function like (objectValueWhere, objectValue) {

    return curryArg(function (rawObjectValueWhere, rawObjectValue) {

        return whereLoopExecution(rawObjectValueWhere, rawObjectValue, true, 'like');

    }, [
        objectValueWhere,
        objectValue
    ], two);

}
module.exports=like;
