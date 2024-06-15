const curryArg = require("../core/curryArg");


/**
 *  To check if its less
 *
 * @since 1.4.8
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * lt(1, 2)
 * // => true
 */
function lt (...args) {

    return curryArg(function (aa, bb) {

        return aa < bb;

    }, args);

}
module.exports=lt;

