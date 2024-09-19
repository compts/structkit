const stringUnEscape = require('./stringUnEscape');
const isJson = require('./isJson');
const isEmpty = require("./isEmpty");

/**
 * Parse Json object
 *
 * @since 1.0.1
 * @category Collection
 * @param {string} value String you want to convert to JSON
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function parseJson (value) {

    const stripValue=stringUnEscape(value);

    if (isJson(stripValue, "string")) {

        if (!isEmpty(stripValue)) {

            return eval('(' + stripValue + ')');

        }

    }

    return null;

}
module.exports=parseJson;

