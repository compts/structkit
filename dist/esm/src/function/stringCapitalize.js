import has from './has';

import getTypeof from './getTypeof';

/**
 * String Capitalize
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * stringCapitalize('the fish is goad   with goat-1ss')
 *=> 'The Fish Is Goad   With Goat-1ss'
 */
function stringCapitalize (value) {

    if (has(value) === false && getTypeof(value) !=="string") {

        return "";

    }

    return value.toLowerCase().replace(/(\s[a-z]|\b[a-z])/g, function (ss1) {

        return ss1.toUpperCase();

    });

}
export default stringCapitalize;

