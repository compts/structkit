const has = require('./has');
const getTypeof = require('./getTypeof');

/**
 * String Capitalize
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value String data
 * @returns {string} Returns Capitalize sting data
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
module.exports=stringCapitalize;
