const curryArg = require("../core/curryArg");
const {getTypeofInternal} = require('../core/getTypeOf');

const {two} = require("../core/defaultValue");

/**
 * To check if its equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any value type
 * @param {any=} value2 Any value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * equal('as', 'as')
 * // => true
 */
function equal (value1, value2) {

    return curryArg(function (aa, bb) {

        if (getTypeofInternal(aa) !== getTypeofInternal(bb)) {

            return false;

        }

        return aa === bb;

    }, [
        value1,
        value2
    ], two);

}
module.exports=equal;
