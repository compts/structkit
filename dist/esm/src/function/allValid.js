import baseCountValidList from '../core/baseCountValidList.js';

import curryArg from '../core/curryArg.js';

import count from './count.js';

import {one} from '../core/defaultValue.js';

/**
 * In array, you need to check all is true
 *
 * @since 1.4.8
 * @category Condition
 * @param {any[]} value First number
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
function allValid (value) {

    return curryArg(function (rawValue) {

        return baseCountValidList(rawValue);

    }, [value], one) === count(value);

}
export default allValid;

