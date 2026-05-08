
import {zero} from '../variable/defaultValue.mjs';

/**
 * Create a separate `has` inside core folder
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value Either JSON or Array
 * @param {any=} key For key or index of data
 * @returns {boolean} Returns true or false.
 * @example
 *
 * _has({'as':1}, 'as')
 * // => true
 */
function _has (value, key) {

    if (typeof key === "undefined") {

        return value !== null && typeof value !== "undefined";

    }

    if ([
        "[object Set]",
        "[object Map]"
    ].indexOf(Object.prototype.toString.call(value)) >=zero) {

        return value.has(key);

    }

    return Object.prototype.hasOwnProperty.call(value, key);

}
export default _has;

