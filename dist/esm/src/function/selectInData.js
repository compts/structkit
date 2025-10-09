import curryArg from '../core/curryArg.js';

import baseMap from '../core/baseMap.js';

import isEmpty from './isEmpty.js';

import getData from './getData.js';

import toArray from './toArray.js';

import getTypeof from './getTypeof.js';

import first from './first.js';

import {two} from '../variable/defaultValue.js';

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
export default selectInData;

