import curryArg from '../core/curryArg.js';

import baseMap from '../core/baseMap.js';

/**
 * To map the value of json or array
 *
 * @since 1.0.1
 * @category Collection
 * @param {any=} func Callback function
 * @param {any=} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * map(function(value) { return value+2 } ,[1,2])
 *=> [3, 4]
 */
function map (func, objectValue) {

    return curryArg(function (rawFunc, rawObjectValue) {

        return baseMap(rawFunc, rawObjectValue);

    }, [
        func,
        objectValue
    ]);

}
export default map;

