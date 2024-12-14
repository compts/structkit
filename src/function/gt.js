const curryArg = require("../core/curryArg");
const {two} = require("../core/defaultValue");

/**
 *  To check if the two arguments are greater
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * gt(1, 2)
 * // => false
 */
function gt (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa > bb;

    }, [
        value1,
        value2
    ], two);

}
module.exports=gt;

