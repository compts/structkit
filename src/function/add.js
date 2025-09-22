const curryArg = require("../core/curryArg");
const {two} = require("../variable/defaultValue");

/**
 * Addition logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for added value
 * @example
 *
 * add(1, 1)
 * // => 2
 */
function add (value1, value2) {

    return curryArg(function (aa, bb) {

        return Number(aa) + Number(bb);

    }, [
        value1,
        value2
    ], two);

}
module.exports=add;

