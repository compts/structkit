const curryArg = require("../core/curryArg");
const {getTypeofInternal} = require('../core/getTypeOf');
const baseMap = require("../core/baseMap");
const where = require("./where");
const mergeWithKey = require("./mergeWithKey");


/**
 * Merging two json/array object with the help of where clause
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge
 * @param {any} whereValue where clause for you to merge the two set of data
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeInWhere({"s":1},{"ss":1})
 *=> {"s":1,"ss":1}
 */
function mergeInWhere (objectValue, mergeValue, whereValue) {

    return curryArg(function (rawObjectValue, rawMergeValue, rawWhereValue) {

        const rawObjectType = getTypeofInternal(rawObjectValue);

        if (getTypeofInternal(rawMergeValue) !== rawObjectType) {

            throw new Error("Invalid , both value must be "+rawObjectType);

        }

        return baseMap(rawObjectValue, function (value) {

            const dataWhere = where(rawMergeValue, rawWhereValue);

            value = mergeWithKey(value, dataWhere);

            return value;

        });


    }, [
        objectValue,
        mergeValue,
        whereValue
    ]);

}
module.exports=mergeInWhere;

