const curryArg = require("../core/curryArg");
const {two} = require("../core/defaultValue");

/**
 * Multiply
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number} value2 Second number
 * @returns {number} Returns true or false.
 * @example
 *
 * multiply(1, 1)
 * // => 1
 */
function multiply (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa * bb;

    }, [
        value1,
        value2
    ], two);

}
module.exports=multiply;

