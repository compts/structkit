const curryArg = require("../core/curryArg");
const baseMap = require("../core/baseMap");
const isEmpty = require("./isEmpty");
const getData = require("./getData");
const toArray = require("./toArray");
const getTypeof = require("./getTypeof");
const first = require("./first");

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

        const rawDataToArray = baseMap(toArray(rawObjectValue), function (value) {

            return baseMap(rawWhereValue, function (value2) {

                const rawData= getData(value, value2);

                return isEmpty(rawData)
                    ?value
                    :rawData;

            });

        });

        return getTypeof(rawObjectValue)==="json"
            ?first(rawDataToArray)
            :rawDataToArray;

    }, [
        objectValue,
        whereValue
    ]);

}
module.exports=selectInData;

