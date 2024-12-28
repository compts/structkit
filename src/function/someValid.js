const baseCountValidList = require("../core/baseCountValidList");
const curryArg = require("../core/curryArg");
const {one} = require("../core/defaultValue");

/**
 * In array, you need to check all value atleast one true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...any?} arg List of value you need to check if some are true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * someValid(true, false)
 * // => true
 */
function someValid (...arg) {

    return curryArg(function (...rawValue) {

        return baseCountValidList(rawValue);

    }, arg) >= one;

}
module.exports=someValid;

