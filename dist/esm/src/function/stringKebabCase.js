import has from './has';

import getTypeof from './getTypeof';

import stringSplit from '../core/stringSplit';

/**
 * String Kebab case
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * stringKebabCase('the fish is goad   with goat-1ss')
 *=> 'the-fish-is-goad-with-goat-1ss'
 */
function stringKebabCase (value) {

    if (has(value) === false && getTypeof(value) !=="string") {

        return "";

    }

    return stringSplit(value)
        .split(" ")
        .join("-");

}
export default stringKebabCase;

