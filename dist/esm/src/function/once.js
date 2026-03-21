import has from './has.js';

import curryArg from '../core/curryArg.js';

import {one, two} from '../variable/defaultValue.js';

import getTypeof from './getTypeof.js';

import indexOfExist from './indexOfExist.js';

/**
 * Check if data was executed once
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} func Any value type, take a note that it also supported curry, then please check it properly use in our doc
 * @returns {any} Returns filled value from its index
 * @example
 *
 * once('as','as2',{'as':1})
 * // => 1
 */
function once (func) {

    let reserve = null;

    return curryArg(function (rawFunc) {

        return function (...arg) {

            if (getTypeof(arg[arg.length-one]) === "array") {

                return rawFunc;

            }

            if (getTypeof(rawFunc) !== "function") {

                reserve = validateCallbackEach(arg, rawFunc, reserve);

                return rawFunc;

            }
            reserve = validateCallbackEach(arg, rawFunc, reserve);

            if (has(rawFunc, '__called__') === false) {

                rawFunc.__called__ = true;

                reserve = rawFunc.apply(this, arg);

            }

            return reserve;

        };

    }, [func], two);

}

/**
 * Check if data was executed once
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} arg Either JSON or array
 * @param {any} rawFunc Either JSON or array
 * @param {any} reserve Either JSON or array
 * @returns {any} Returns filled value from its index
 * @example
 *
 * once('as','as2',{'as':1})
 * // => 1
 */
function validateCallbackEach (arg, rawFunc, reserve) {

    const argValue = arg[arg.length-one];

    if (getTypeof(argValue) === "json") {

        if (has(argValue, 'continue') && has(argValue, 'pass_value') && has(argValue, 'action')) {

            argValue.external_execution_from ='once';
            if (indexOfExist(argValue.action, ["lookup_execution"])) {

                if (argValue.pass_value) {

                    argValue.continue =false;

                }

            } else if (indexOfExist(argValue.action, ["filter"])) {

                const reserveRef = rawFunc.apply(this, arg);

                if (reserveRef) {

                    argValue.continue =false;
                    reserve = reserveRef;
                    rawFunc.__called__ = true;

                }

            } else if (indexOfExist(argValue.action, ["map"])) {

                argValue.continue =false;

            } else {

                rawFunc.__called__ = true;

                argValue.continue =false;

            }

        }

    }

    return reserve;

}
export default once;

