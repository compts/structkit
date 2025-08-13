const curryArg = require("../core/curryArg");
const {one} = require("../core/defaultValue");
const getTypeof = require('./getTypeof');
const map = require("./map");
const count = require("./count");


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
module.exports=reverse;

