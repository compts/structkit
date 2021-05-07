const getJSONVariable = require('./getJSONVariable');

const each = require('./each');

const append = require('./append');


/**
 * Array Clone
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {float} Returns the total.
 * @example
 *
 * clone([1,2])
 * // => [1,2]
 */
function clone (objectValue) {

    const variable=getJSONVariable(objectValue);

    each(objectValue, function (key, value) {

        append(variable, value, key);

    });

    return variable;

}
module.exports=clone;;

