const baseCountValidList = require("../core/baseCountValidList");
const curryArg = require("../core/curryArg");
const count = require('./count');
const baseReduce = require("../core/baseReduce");
const toArray = require("./toArray");
const {zero} = require("../variable/defaultValue");

/**
 * In array, you need to check all value is true
 *
 * @since 1.4.8
 * @category Predicate
 * @param {...any?} arg List of value you need to check if all true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
function allValid (...arg) {

    const mapCount = baseReduce(function (total, value) {

        total+= count(toArray(value));

        return total;

    }, zero, arg);

    return curryArg(function (...rawValue) {

        return baseCountValidList(rawValue);

    }, arg) === mapCount;

}
module.exports=allValid;

