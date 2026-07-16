import curryArg from '../core/curryArg.mjs';

import {one, two, zero} from '../variable/defaultValue.mjs';

import baseTake from '../core/baseTake.mjs';

/**
 * Get the value from index zero until the last value
 *
 * @since 1.4.86
 * @category Array
 * @param {number} value First number, our first index will start at zero
 * @param {any[]|string} valueList Second number
 * @returns {any} Returns choice index value in list.
 * @example
 *
 * take(1, [1])
 * // => 1
 */
function take (value, valueList) {

    return curryArg(function (rawValue, rawList) {

        return baseTake(rawList, zero, rawValue-one);

    }, [
        value,
        valueList
    ], two);

}
export default take;

