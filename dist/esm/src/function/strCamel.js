import stringSplit from '../core/stringSplit.js';

import toString from './toString.js';

/**
 * String Camel case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * strCamel('the fish is goad   with goat-1ss')
 *=> 'theFishIsGoadWithGoat1ss'
 */
function strCamel (value) {

    return stringSplit(toString(value))
        .replace(/(\s[a-z])/g, function (ss1) {

            return ss1.toUpperCase();

        })
        .split(" ")
        .join("");

}
export default strCamel;

