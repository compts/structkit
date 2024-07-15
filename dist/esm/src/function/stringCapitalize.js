import stringLowerCase from './toString.js';

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
 * stringCapitalize('the fish is goad   with goat-1ss','all')
 *=> 'The Fish Is Goad   With Goat-1ss'
 * stringCapitalize('the fish is goad   with goat-1ss')
 *=> 'The fish is goad   with goat-1ss'
 */
function stringCapitalize (value, option) {

    if (option === "all") {

        return stringLowerCase(value).replace(/(\s[a-z]|\b[a-z])/g, function (ss1) {

            return ss1.toUpperCase();

        });

    }

    return stringLowerCase(value).replace(/([a-z]{1})/, function (ss1) {

        return ss1.toUpperCase();

    });

}
export default stringCapitalize;

