
import map from './map';

import first from './first';

import count from './count';

import {getTypeofInternal} from '../core/getTypeOf';

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

    const one = 1;

    const getTypes = map(args, function (value) {

        return getTypeofInternal(value);

    });

    return count(getTypes) === one
        ?first(getTypes)
        :getTypes;

}
export default getTypeof;

