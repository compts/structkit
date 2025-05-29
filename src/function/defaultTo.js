const curryArg = require("../core/curryArg");
const {two} = require("../core/defaultValue");
const _has = require("../core/_has");

/**
 *  Returns the second argument if it is not null, `undefined` or `NaN`, otherwise returns the first argument.
 *
 * @since 1.4.87
 * @category Boolean
 * @param {any} defaultValue Any first value type
 * @param {any=} value2 Any first value type
 * @returns {any} Returns true or false.
 * @example
 *
 * defaultTo(1,2)
 * // => 2
 */
function defaultTo (defaultValue, value2) {

    return curryArg(function (aa, bb) {

        if (isNaN(bb)) {

            return aa;

        }
        if (_has(bb) === false) {

            return aa;

        }

        return bb;

    }, [
        defaultValue,
        value2
    ], two);

}
module.exports=defaultTo;

