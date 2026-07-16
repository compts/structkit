
import map from './map.mjs';

import first from './first.mjs';

import count from './count.mjs';

import {getTypeofInternal} from '../core/getTypeOf.mjs';

import {one} from '../variable/defaultValue.mjs';

/**
 * Get type of the variable
 *
 * @since 1.0.1
 * @category String
 * @param {...any} args Any data you want to check its property in multiple arguments
 * @returns {string|string[]} Get the property of variable
 * @example
 *
 * getTypeof([])
 * => array
 * getTypeof([],{})
 * => [array,json]
 */
function getTypeof (...args) {

    const getTypes = map(function (value) {

        return getTypeofInternal(value);

    }, args);

    return count(getTypes) === one
        ?first(getTypes)
        :getTypes;

}
export default getTypeof;

