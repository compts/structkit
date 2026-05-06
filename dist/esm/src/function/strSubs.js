import toString from './toString.js';

import has from './has.js';

/**
 * String Substr
 *
 * @since 1.4.5
 * @category String
 * @param {string} value String data
 * @param {number} minValue minimum value
 * @param {number=} maxValue maximum value
 * @returns {string} Returns camel sting data
 * @example
 *
 * strSubs('The fish is goad   with Goat-1ss',4)
 *=> fish is goad   with Goat-1ss
 */
function strSubs (value, minValue, maxValue) {

    if (has(maxValue)) {

        return toString(value).substring(minValue, maxValue);

    }

    return toString(value).substring(minValue);

}
export default strSubs;

