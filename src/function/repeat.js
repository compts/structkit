const arrayRepeat = require('./arrayRepeat');
const curryArg = require("../core/curryArg");
const {zero} = require("../core/defaultValue");


/**
 * Repeat string value
 *
 * @since 1.0.1
 * @category String
 * @param {string=} value String you want to duplicate
 * @param {number=} valueRepetion how many times you want to repeate
 * @returns {string} Return in string or number.
 * @example
 *
 * repeat("s",1 )
 *=>'ss'
 */
function repeat (value, valueRepetion) {


    return curryArg(function (rawValue, rawValueRepetion) {

        const nm_rpt=rawValueRepetion||zero;
        const nm_str=rawValue||"";

        return arrayRepeat(nm_str, nm_rpt).join("");

    }, [
        value,
        valueRepetion
    ]);

}
module.exports=repeat;

