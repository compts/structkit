const curryArg = require("../core/curryArg");
const {one, two, zero} = require("../core/defaultValue");
const baseTake = require("../core/baseTake");


/**
 * Get the value from index zero until the last value
 *
 * @since 1.4.86
 * @category Math
 * @param {number} value First number, our first index will start at zero
 * @param {any[]|string} valueList Second number
 * @returns {number} Returns true or false.
 * @example
 *
 * take(1, [1])
 * // => 1
 */
function take (value, valueList) {

    return curryArg(function (rawValue, rawList) {

        return baseTake(rawList, zero, rawValue-one);

    }, [
        value,
        valueList
    ], two);

}
module.exports=take;

