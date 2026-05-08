import stringSplit from '../core/stringSplit.mjs';

import toString from './toString.mjs';

/**
 * String Kebab case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns Kebab sting data
 * @example
 *
 * strKebab('the fish is goad   with goat-1ss')
 *=> 'the-fish-is-goad-with-goat-1ss'
 */
function strKebab (value) {

    return stringSplit(toString(value))
        .split(" ")
        .join("-");

}
export default strKebab;

