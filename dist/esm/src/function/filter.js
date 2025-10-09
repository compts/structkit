import has from './has.js';

import curryArg from '../core/curryArg.js';

import each from './each.js';

import empty from './empty.js';

import getTypeof from './getTypeof.js';

import append from './append.js';

/**
 * Filter the data in for loop
 *
 * @since 1.0.1
 * @category Collection
 * @param {Function=} func Callback function for filtering the data
 * @param {any=} objectValue The data either json or array
 * @returns {any} Returns data either json or array.
 * @example
 *
 * filter(function(value, key){ return value%2 === 0 }, [1,2,3,34])
 *
 * => [2, 34]
 */
function filter (func, objectValue) {

    return curryArg(function (rawFunc, rawObjectValue) {

        const jsn_var=empty(rawObjectValue);
        const jsn_type=getTypeof(rawObjectValue);

        if (!(/(json|array)/g).test(jsn_type)) {

            return [];

        }
        each(rawObjectValue, function (value, key) {

            if (has(rawFunc)) {

                if (rawFunc(value, key)) {

                    append(jsn_var, value, key);

                }

            }

        });

        return jsn_var;

    }, [
        func,
        objectValue
    ]);

}
export default filter;

