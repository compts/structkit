import baseCountValidList from '../core/baseCountValidList.js';

import curryArg from '../core/curryArg.js';

import count from './count.js';

/**
 * In array, you need to check all value is true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...any?} arg List of value you need to check if true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
function allValid (...arg) {

    return curryArg(function (...rawValue) {

        return baseCountValidList(rawValue);

    }, arg) === count(arg);

}
export default allValid;

