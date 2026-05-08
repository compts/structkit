import curryArg from '../core/curryArg.mjs';

import baseMap from '../core/baseMap.mjs';

import isEmpty from './isEmpty.mjs';

import getData from './getData.mjs';

import toArray from './toArray.mjs';

import getTypeof from './getTypeof.mjs';

import first from './first.mjs';

import {two} from '../variable/defaultValue.mjs';

/**
 * Selecting multiple search data using `getData` logic in the loop
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} whereValue Collection or json where `key` as suggested name of the key then `value` your target data, take a note on `value` it also supported nested key structure
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

