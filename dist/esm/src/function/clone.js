import getJSONVariable from './getJSONVariable';
import each from './each';
import append from './append';


/**
 * Array Clone
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @returns {number} Returns the total.
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
export default clone;

