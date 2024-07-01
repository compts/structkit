const curryArg = require("../core/curryArg");
const {two} = require("../core/defaultValue");

/**
 * To check if its less than to equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * lte(1, 2)
 * // => true
 */
function lte (...args) {

    return curryArg(function (aa, bb) {

        return aa <= bb;

    }, args, two);

}
module.exports=lte;
