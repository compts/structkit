import curryArg from '../core/curryArg.mjs';

import {one} from '../variable/defaultValue.mjs';

import getTypeof from './getTypeof.mjs';

import map from './map.mjs';

import count from './count.mjs';

/**
 * Return reverse order of array
 *
 * @since 1.4.9
 * @category Array
 * @param {any[]|string} value First number, our first index will start at zero
 * @returns {any} Returns it reverse order.
 * @example
 *
 * reverse([1,2,3,4])
 * // => [4,3,2,1]
 */
function reverse (value) {

    return curryArg(function (rawValue) {

        const typeOf = getTypeof(rawValue);
        const refRawList = typeOf=== "string"
            ?rawValue.split("")
            :rawValue;

        const cloneMap = map(function (__, key) {

            return refRawList[count(refRawList) - one - key];

        }, refRawList);

        return typeOf === "string"
            ?cloneMap.join("")
            :cloneMap;

    }, [value], one);

}
export default reverse;

