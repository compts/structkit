const baseCountValidList = require("../core/baseCountValidList");
const curryArg = require("../core/curryArg");
const count = require('./count');

const {one} = require("../core/defaultValue");

/**
 * In array, you need to check all is true
 *
 * @since 1.4.8
 * @category Condition
 * @param {any[]} value First number
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
function allValid (value) {

    return curryArg(function (rawValue) {

        return baseCountValidList(rawValue);

    }, [value], one) === count(value);

}
module.exports=allValid;

