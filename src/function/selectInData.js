const curryArg = require("../core/curryArg");
const baseMap = require("../core/baseMap");
const isEmpty = require("./isEmpty");
const getData = require("./getData");

/**
 * Selecting multiple search data using `getData` logic in the loop
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} whereValue where clause for you to merge the two set of data
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * selectInData({"s":1},{"ss":"s"})
 *=> {"ss":1}
 */
function selectInData (objectValue, whereValue) {

    return curryArg(function (rawObjectValue, rawWhereValue) {

        return baseMap(rawWhereValue, function (value) {

            const rawData = getData(rawObjectValue, value);

            return isEmpty(rawData)
                ?value
                :rawData;

        });


    }, [
        objectValue,
        whereValue
    ]);

}
module.exports=selectInData;

