const curryArg = require("../core/curryArg");
const baseMap = require("../core/baseMap");
const isEmpty = require("./isEmpty");
const getData = require("./getData");
const toArray = require("./toArray");
const getTypeof = require("./getTypeof");
const first = require("./first");
const {two} = require("../variable/defaultValue");


/**
 * Selecting multiple search data using `getData` logic in the loop
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} whereValue where clause for you to merge the two set of data
 * @param {any} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * selectInData({"ss":"s"}, {"s":1})
 *=> {"ss":1}
 */
function selectInData (whereValue, objectValue) {

    return curryArg(function (rawWhereValue, rawObjectValue) {

        return baseMap(function (value) {

            const rawDataToArray = baseMap(function (value2) {

                const rawData = getData(value, value2);

                return isEmpty(rawData)
                    ?value
                    :rawData;

            }, toArray(rawObjectValue));

            return getTypeof(rawObjectValue)==="json"
                ?first(rawDataToArray)
                :rawDataToArray;

        }, rawWhereValue);

    }, [
        whereValue,
        objectValue
    ], two);

}
module.exports=selectInData;
