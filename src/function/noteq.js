const curryArg = require("../core/curryArg");
const {two} = require("../core/defaultValue");

/**
 * To check if its not equal
 *
 * @since 1.4.8
 * @category Relation
 * @param {any} value1 Any value type
 * @param {any} value2 Any value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * noteq('as', 'as')
 * // => false
 */
function noteq (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa !== bb;

    }, [
        value1,
        value2
    ], two);

}
module.exports=noteq;

