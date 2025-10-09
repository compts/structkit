const map = require('./map');
const range = require('./range');
const curryArg = require("../core/curryArg");
const {zero, one} = require("../variable/defaultValue");

/**
 * Repeat value in array
 *
 * @since 1.4.7
 * @category Array
 * @param {any} value String you want to duplicate
 * @param {number} valueRepetion how many times you want to repeate
 * @returns {any[]} Return in string or number.
 * @example
 *
 * arrayRepeat("s",2 )
 *=>['s','s']
 */
function arrayRepeat (value, valueRepetion) {


    return curryArg(function (rawValue, rawValueRepetion) {

        const nm_rpt=rawValueRepetion||zero;

        return map(function () {

            return rawValue;

        }, range(nm_rpt));

    }, [
        value,
        valueRepetion
    ], one);

}
module.exports=arrayRepeat;

