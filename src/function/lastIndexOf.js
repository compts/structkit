const curryArg = require("../core/curryArg");

const count = require('./count');

const {getIndexOf} = require('../core/getIndexOf');

const {zero, two} = require("../variable/defaultValue");

/**
 * Get the last index Of array
 *
 * @since 1.0.1
 * @category Relation
 * @param {any} value Value you are searching for
 * @param {any} objectValue Array
 * @returns {any} Return get the index or array
 * @example
 *
 * lastIndexOf([1,2], 1)
 * // => 0
 */
function lastIndexOf (value, objectValue) {

    return curryArg(function (rawValue, rawObjectValue) {

        const indexValue = getIndexOf(rawObjectValue, rawValue, zero, count(rawObjectValue), true);

        return indexValue;

    }, [
        value,
        objectValue
    ], two);


}
module.exports=lastIndexOf;
