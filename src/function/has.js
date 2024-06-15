const _has = require("../core/_has");
const curryArg = require("../core/curryArg");


/**
 * Check if object has value or null
 *
 * @since 1.0.1
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * has({'as':1}, 'as')
 * // => true
 */
function has (...args) {

    return curryArg(function (aa, bb) {

        return _has(aa, bb);

    }, args);

}
module.exports=has;

