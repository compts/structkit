import getTypeof from './getTypeof.js';

import curryArg from '../core/curryArg.js';

import has from './has.js';

import each from './each.js';

import count from './count.js';

import varExtend from './varExtend.js';

import stringUnEscape from './stringUnEscape.js';

import removeFromKey from './removeFromKey.js';

import indexOfNotExist from './indexOfNotExist.js';

import getKey from './getKey.js';

import toString from './toString.js';

import convertValue from '../core/convertValue.js';

import {two, one, zero} from '../core/defaultValue.js';

import {validTypeJson} from '../variable/types.js';

/**
 * String escape qoutes
 *
 * @since 1.4.872
 * @category Collection
 * @param {any} str Object you want to convert to JSON string
 * @returns {string} Return JSON string
 * @example
 *
 * escapeQuotesStr("'" )
 *=>"\\'"
 */
function escapeQuotesStr (str) {

    return str.replace(/'/g, "&apos;").replace(/"/g, '&quot;');

}

/**
 * Parse String
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} rawCount This will define deep was nested
 * @param {any} rawConfig The config by user
 * @param {any} rawValue The data that you want to covert to a string from json/array
 * @returns {string} Returns the total.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function parseStringCore (rawCount, rawConfig, rawValue) {

    return curryArg(function (refCount, refConfig, value) {

        let prepStr = "";

        if (has(rawCount === zero
            ?validTypeJson
            :removeFromKey(validTypeJson, "object"), getTypeof(value))) {

            const getTypeDetails = validTypeJson[getTypeof(value)];

            let inc=0;

            each(value, function (ev, ek) {

                const delimeter=inc<count(value)-one
                    ?","
                    :"";

                if (getTypeDetails.isKey) {

                    prepStr += parseStringCore(rawCount+one, rawConfig, ek)+":"+parseStringCore(one, rawConfig, ev)+delimeter;

                } else {

                    prepStr += parseStringCore(rawCount+one, rawConfig, ev)+delimeter;

                }

                inc += one;

            });

            return getTypeDetails.start+prepStr+getTypeDetails.end;

        }

        const parseValue = convertValue(value);

        if (getTypeof(parseValue) === "string") {

            return '"'+escapeQuotesStr(parseValue)+'"';

        }
        if (getTypeof(parseValue) === "undefined") {

            return '"undefined"';

        }
        if (getTypeof(parseValue) === "date") {

            return '"'+toString(parseValue)+'"';

        }
        if (getTypeof(parseValue) === "regexp") {

            return '"new RegExp(' + value.source +','+ value.flags+')"';

        }

        if (getTypeof(parseValue) === "number") {

            if (isNaN(parseValue)) {

                return '"NaN"';

            }

            if (Infinity === parseValue) {

                return '"Infinity"';

            }

            return value;

        }

        if (getTypeof(value) === "object") {

            return '"'+value+'"';

        }

        if (getTypeof(parseValue) === "function") {

            if (refConfig.ignoreFunction) {

                return null;

            }

            return '"'+parseValue+'"';

        }

        return parseValue;

    }, [
        rawCount,
        rawConfig,
        rawValue
    ], two);

}

/**
 * Parse from JSON object to String
 *
 * @since 1.4.86
 * @category
 * @param {any} value The Object that you want to convert to string in json format.
 * @param {any=} config Option you want to set in this function.
 * @returns {string} Returns the string in json format.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function parseString (value, config) {

    const defaultConfig = varExtend({"ignoreFunction": true,
        "isJson": false,
        "unscapeEntity": false}, config);

    if (indexOfNotExist(getKey(validTypeJson), getTypeof(value))) {

        throw new Error("Allow only " +getKey(validTypeJson).join(","));

    }

    let data = parseStringCore(zero, defaultConfig, value);

    if (defaultConfig.unscapeEntity) {

        data = stringUnEscape(data);

    }

    return data.toString();

}

export default parseString;

