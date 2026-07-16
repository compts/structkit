import has from './has.mjs';

import curryArg from '../core/curryArg.mjs';

import {one, two} from '../variable/defaultValue.mjs';

import getTypeof from './getTypeof.mjs';

import toBoolean from './toBoolean.mjs';

import indexOfNotExist from './indexOfNotExist.mjs';

/**
 * Check if data was not equal to true and 1
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} func Any type , take a note that it also supported curry, then please check it properly use in our doc
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
                    argValue.is_true= false;

                    if (argValue.action === "lookup_execution") {

                        return rawFunc;

                    }

                    if (argValue.action === "filter") {

                        reserve = rawFunc.apply(this, arg);

                    }

                }

            }

            return reserve;

        };

    }, [func], two);

}

export default not;

