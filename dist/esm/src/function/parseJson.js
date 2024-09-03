import stringUnEscape from './stringUnEscape.js';

import isJson from './isJson.js';

import isEmpty from './isEmpty.js';

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
export default parseJson;

