const curryArg = require("../core/curryArg");
const {two} = require("../core/defaultValue");

/**
 *  To check if its greater than to equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any value type
 * @param {any=} value2 Any value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * gte(1, 2)
 * // => false
 */
function gte (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa >= bb;

    }, [
        value1,
        value2
    ], two);

}
module.exports=gte;

