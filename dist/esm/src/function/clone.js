import empty from './empty.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import each from './each.js';

import indexOfExist from './indexOfExist.js';

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

    if (indexOfExist(getTypeofInternal(objectValue), [
        "json",
        "array",
        "object",
        "arguments",
        "set",
        "map"
    ])) {

        let variable=empty(objectValue);

        each(objectValue, function (value, key) {

            variable = append(variable, value, key);

        });

        return variable;

    }

    switch (getTypeofInternal(objectValue)) {

    case 'date':
        return new Date(objectValue.valueOf());
    case 'uint16Array':
    case 'uint8Array':
        return objectValue.slice();
    default: return objectValue;

    }

}
export default clone;

