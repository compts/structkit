import stringSplit from '../core/stringSplit.js';

import toString from './toString.js';

/**
 * String Kebab case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns Kebab sting data
 * @example
 *
 * stringKebabCase('the fish is goad   with goat-1ss')
 *=> 'the-fish-is-goad-with-goat-1ss'
 */
function stringKebabCase (value) {

    return stringSplit(toString(value))
        .split(" ")
        .join("-");

}
export default stringKebabCase;

