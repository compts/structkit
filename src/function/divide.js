const curryArg = require("../core/curryArg");
const {two} = require("../core/defaultValue");

/**
 * Divide
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns true or false.
 * @example
 *
 * divide(1, 1)
 * // => 1
 */
function divide (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa / bb;

    }, [
        value1,
        value2
    ], two);

}
module.exports=divide;

