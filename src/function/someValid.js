const baseCountValidList = require("../core/baseCountValidList");
const curryArg = require("../core/curryArg");
const {one, zero} = require("../core/defaultValue");

/**
 * In array, you need to check atleast one true
 *
 * @since 1.4.8
 * @category Condition
 * @param {any[]} value First number
 * @returns {boolean} Returns true or false.
 * @example
 *
 * someValid(true, false)
 * // => true
 */
function someValid (value) {

    return curryArg(function (rawValue) {

        return baseCountValidList(rawValue);

    }, [value], one) !== zero;

}
module.exports=someValid;

