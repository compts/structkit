const curryArg = require("../core/curryArg");
const {two} = require("../core/defaultValue");

/**
 *  To check if its less
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any value type
 * @param {any=} value2 Any value type
 * @returns {boolean|any} Returns true or false.
 * @example
 *
 * lt(1, 2)
 * // => true
 */
function lt (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa < bb;

    }, [
        value1,
        value2
    ], two);

}
module.exports=lt;
