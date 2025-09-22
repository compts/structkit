import curryArg from '../core/curryArg.js';

import {one} from '../variable/defaultValue.js';

import getTypeof from './getTypeof.js';

import map from './map.js';

import count from './count.js';

/**
 * Return reverse order of array
 *
 * @since 1.4.874
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

        const cloneMap = map(refRawList, function (__, key) {

            return refRawList[count(refRawList) - one - key];

        });

        return typeOf === "string"
            ?cloneMap.join("")
            :cloneMap;

    }, [value], one);

}
export default reverse;

