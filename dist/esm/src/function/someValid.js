import baseCountValidList from '../core/baseCountValidList.js';

import curryArg from '../core/curryArg.js';

import {one, zero} from '../core/defaultValue.js';

/**
 * In array, you need to check atleast one true
 *
 * @since 1.4.8
 * @category Condition
 * @param {any[]} value First number
 * @returns {boolean} Returns true or false.
 * @example
 *
 * someValid(true, false)
 * // => true
 */
function someValid (value) {

    return curryArg(function (rawValue) {

        return baseCountValidList(rawValue);

    }, [value], one) !== zero;

}
export default someValid;

