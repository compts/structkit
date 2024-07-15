const curryArg = require("../core/curryArg");
const baseMap = require("../core/baseMap");

/**
 * To map the value of json or array
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any=} func Callback function
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * map([1,2],function(value) { return value+2 } )
 *=> [3, 4]
 */
function map (objectValue, func) {

    return curryArg(function (rawObjectValue, rawFunc) {

        return baseMap(rawObjectValue, rawFunc);

    }, [
        objectValue,
        func
    ]);

}
module.exports=map;

