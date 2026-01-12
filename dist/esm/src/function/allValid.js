import baseCountValidList from '../core/baseCountValidList.js';

import curryArg from '../core/curryArg.js';

import count from './count.js';

import baseReduce from '../core/baseReduce.js';

import toArray from './toArray.js';

import {zero} from '../variable/defaultValue.js';

/**
 * In array, you need to check all value is true
 *
 * @since 1.4.8
 * @category Predicate
 * @param {...any?} arg List of value you need to check if all true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
function allValid (...arg) {

    const mapCount = baseReduce(function (total, value) {

        total+= count(toArray(value));

        return total;

    }, zero, arg);

    return curryArg(function (...rawValue) {

        return baseCountValidList(rawValue);

    }, arg) === mapCount;

}
export default allValid;

