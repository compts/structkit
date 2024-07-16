const curryArg = require("../core/curryArg");
const baseAppend = require("../core/baseAppend");
const each = require("./each");
const {getTypeofInternal} = require('../core/getTypeOf');
const indexOfExist = require("./indexOfExist");


/**
 * Merging two json object
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeWithKey({"s":1},{"ss":1})
 *=> {"s":1,"ss":1}
 */
function mergeWithKey (objectValue, mergeValue) {

    return curryArg(function (rawObjectValue, rawMergeValue) {

        if (indexOfExist([
            "array",
            "string",
            "number"
        ], getTypeofInternal(rawObjectValue))|| indexOfExist([
            "array",
            "string",
            "number"
        ], getTypeofInternal(rawMergeValue))) {

            throw new Error("Invalid , both value must be json");

        }

        each(rawMergeValue, function (sKey, sVal) {

            rawObjectValue = baseAppend(rawObjectValue, sVal, sKey);

        });

        return rawObjectValue;


    }, [
        objectValue,
        mergeValue
    ]);

}
module.exports=mergeWithKey;

