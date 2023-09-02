import getJSONVariable from './getJSONVariable';

import each from './each';

import append from './append';

/**
 * Cloning the data either in JSON or array that be used as different property
 *
 * @since 1.0.1
 * @category Any
 * @param {any} objectValue data you want to clone
 * @returns {any} Returns clone data
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

