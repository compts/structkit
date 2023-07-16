const stringUnEscape = require('./stringUnEscape');
const isJson = require('./isJson');

/**
 * Parse Json
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value String you want to convert to JSON
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function parseJson (value) {

    const emptyDefaultValue=0;
    const stripValue=stringUnEscape(value);
    let returnValue=null;

    if (isJson(value)) {

        if (stripValue.length>emptyDefaultValue && !(/^\s*$/).test(stripValue)) {

            returnValue = eval('(' + stripValue + ')');

        }

    }

    return returnValue;

}
module.exports=parseJson;

