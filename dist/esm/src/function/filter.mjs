import has from './has.mjs';

import curryArg from '../core/curryArg.mjs';

import each from './each.mjs';

import empty from './empty.mjs';

import getTypeof from './getTypeof.mjs';

import append from './append.mjs';

import {two} from '../variable/defaultValue.mjs';

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
        each(rawObjectValue, function (value, key, localGlobal) {

            if (has(rawFunc)) {

                localGlobal.action = "filter";
                localGlobal.pass_value = rawFunc(value, key, localGlobal) === localGlobal.is_true;

                if (localGlobal.pass_value) {

                    append(jsn_var, value, key);

                }

            }

        });

        return jsn_var;

    }, [
        func,
        objectValue
    ], two);

}
export default filter;

