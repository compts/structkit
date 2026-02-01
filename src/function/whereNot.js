const whereLoopExecution = require('../core/whereLoopExecution');
const curryArg = require("../core/curryArg");
const {two} = require("../variable/defaultValue");

/**
 *  Get the value in array the value in json that should not in search value of json
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValueWhere Data that you exlude in search
 * @param {any=} objectValue Json to Array
 * @returns {any} Return either Json to Array.
 * @example
 *
 * whereNot([{"s1":1,"s2":1},{"s1":2,"s2":2}],{"s1":1})
 *=>[{"s1":2,"s2":2}]
 * whereNot([{"s1":{"s2":2}},{"s1":{"s2":3}}],{"s1.s2":2})
 *=>[{"s1":{"s2":3}}]
 */
function whereNot (objectValueWhere, objectValue) {


    return curryArg(function (rawObjectValueWhere, rawObjectValue) {

        return whereLoopExecution(rawObjectValueWhere, rawObjectValue, false, 'where');

    }, [
        objectValueWhere,
        objectValue
    ], two);

}
module.exports=whereNot;

