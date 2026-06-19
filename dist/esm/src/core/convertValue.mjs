import {getTypeofInternal} from './getTypeOf.mjs';

/**
 * Convert date to its preferred value
 *
 * @since 1.4.9
 * @category Function
 * @param {string} value String to split
 * @returns {string} Returns the total.
 * @example
 *
 * convertValue("split-this-string")
 *=>"split this string"
 */
function convertValue (value) {

    if (getTypeofInternal(value) === "string") {

        if ((/^\d+$/).test(value)) {

            return parseInt(value, 10);

        }

        if ((/^\d+\.\d+$/).test(value)) {

            return parseFloat(value);

        }

        return value;

    }

    return value;

}
export default convertValue;

