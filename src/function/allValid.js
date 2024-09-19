const baseCountValidList = require("../core/baseCountValidList");
const curryArg = require("../core/curryArg");
const count = require('./count');

/**
 * In array, you need to check all value is true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...any?} arg First number
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
function allValid (...arg) {

    return curryArg(function (...rawValue) {

        return baseCountValidList(rawValue);

    }, arg) === count(arg);

}
module.exports=allValid;

