import getJSONVariable from './getJSONVariable';
import each from './each';
import append from './append';

/**
 * Array Clone
 *
 * @since 1.0.1
 * @category Seq
 * @param {array} objectValue The second number in an addition.
 * @returns {float} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 */
function clone (objectValue) {

    const variable=getJSONVariable(objectValue);

    each(objectValue, function (key, value) {

        append(variable, value, key);

    });

    return variable;

}
export default clone;
