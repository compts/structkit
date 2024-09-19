import curryArg from '../core/curryArg.js';

import baseMap from '../core/baseMap.js';

import isEmpty from './isEmpty.js';

import getData from './getData.js';

import toArray from './toArray.js';

import getTypeof from './getTypeof.js';

import first from './first.js';

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

            const rawDataToArray = baseMap(toArray(rawObjectValue), function (value2) {

                const rawData = getData(value2, value);

                return isEmpty(rawData)
                    ?value
                    :rawData;

            });

            return getTypeof(rawObjectValue)==="json"
                ?first(rawDataToArray)
                :rawDataToArray;

        });

    }, [
        objectValue,
        whereValue
    ]);

}
export default selectInData;

