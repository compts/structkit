import empty from './empty.js';

import each from './each.js';

import append from './append.js';

/**
 * Cloning the data either in JSON or array that be used as different property
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue data you want to clone
 * @returns {any} Returns clone data
 * @example
 *
 * clone([1,2])
 * // => [1,2]
 */
function clone (objectValue) {

    const variable=empty(objectValue);

    each(objectValue, function (value, key) {

        append(variable, value, key);

    });

    return variable;

}
export default clone;

