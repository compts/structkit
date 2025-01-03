import baseCountValidList from '../core/baseCountValidList.js';

import curryArg from '../core/curryArg.js';

import {one} from '../core/defaultValue.js';

/**
 * In array, you need to check all value atleast one true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...any?} arg List of value you need to check if some are true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * someValid(true, false)
 * // => true
 */
function someValid (...arg) {

    return curryArg(function (...rawValue) {

        return baseCountValidList(rawValue);

    }, arg) >= one;

}
export default someValid;

