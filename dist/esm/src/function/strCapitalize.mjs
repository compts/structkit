import toString from './toString.mjs';

/**
 * String Capitalize
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} option Type of captalize optional
 * @returns {string} Returns Capitalize sting data
 * @example
 *
 * strCapitalize('the fish is goad   with goat-1ss','all')
 *=> 'The Fish Is Goad   With Goat-1ss'
 * strCapitalize('the fish is goad   with goat-1ss')
 *=> 'The fish is goad   with goat-1ss'
 */
function strCapitalize (value, option) {

    if (option === "all") {

        return toString(value).replace(/(\s[a-z]|\b[a-z])/g, function (ss1) {

            return ss1.toUpperCase();

        });

    }

    return toString(value).replace(/([a-z]{1})/, function (ss1) {

        return ss1.toUpperCase();

    });

}
export default strCapitalize;

