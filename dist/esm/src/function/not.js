import has from './has.js';

import curryArg from '../core/curryArg.js';

import {one, two} from '../variable/defaultValue.js';

import getTypeof from './getTypeof.js';

import toBoolean from './toBoolean.js';

import indexOfNotExist from './indexOfNotExist.js';

/**
 * Check if data was not valid
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} func Either JSON or array
 * @returns {any} Returns filled value from its index
 * @example
 *
 * not(false)
 * // => true
 */
function not (func) {

    let reserve = null;

    if (indexOfNotExist(getTypeof(func), [
        "json",
        "function",
        "object"
    ])) {

        return toBoolean(func) === false;

    }

    return curryArg(function (rawFunc) {

        return function (...arg) {

            const argValue = arg[arg.length-one];

            if (getTypeof(argValue) === "json") {

                if (has(argValue, 'continue') && has(argValue, 'pass_value') && has(argValue, 'action')) {

                    argValue.external_execution_from ='not';
                    if (argValue.action === "lookup_execution") {

                        argValue.is_true= false;

                        return rawFunc;

                    }

                    if (argValue.action === "filter") {

                        argValue.is_true= false;
                        reserve = rawFunc.apply(this, arg);

                    }

                }

            }

            return reserve;

        };

    }, [func], two);

}

export default not;

