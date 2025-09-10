import map from './map.js';

import range from './range.js';

import curryArg from '../core/curryArg.js';

import {zero, one} from '../core/defaultValue.js';

/**
 * Repeat value in array
 *
 * @since 1.4.7
 * @category Array
 * @param {any} value String you want to duplicate
 * @param {number} valueRepetion how many times you want to repeate
 * @returns {any[]} Return in string or number.
 * @example
 *
 * arrayRepeat("s",2 )
 *=>['s','s']
 */
function arrayRepeat (value, valueRepetion) {

    return curryArg(function (rawValue, rawValueRepetion) {

        const nm_rpt=rawValueRepetion||zero;

        return map(range(nm_rpt), function () {

            return rawValue;

        });

    }, [
        value,
        valueRepetion
    ], one);

}
export default arrayRepeat;

