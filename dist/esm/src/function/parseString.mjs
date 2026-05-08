import getTypeof from './getTypeof.mjs';

import curryArg from '../core/curryArg.mjs';

import has from './has.mjs';

import toArray from './toArray.mjs';

import each from './each.mjs';

import count from './count.mjs';

import varExtend from './varExtend.mjs';

import strUnEscape from './strUnEscape.mjs';

import remove from './remove.mjs';

import indexOfNotExist from './indexOfNotExist.mjs';

import getKey from './getKey.mjs';

import toString from './toString.mjs';

import convertValue from '../core/convertValue.mjs';

import {two, one, zero} from '../variable/defaultValue.mjs';

import {validTypeJson} from '../variable/types.mjs';

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
        "throwError": false,
        "unscapeEntity": false}, config);

    if (indexOfNotExist(getTypeof(value), getKey(validTypeJson))) {

        if (defaultConfig.throwError) {

            throw new Error("Allow only " +toArray(getKey(validTypeJson)).join(","));

        }

        return '';

    }

    let data = parseStringCore(zero, defaultConfig, value);

    if (defaultConfig.unscapeEntity) {

        data = strUnEscape(data);

    }

    return data.toString();

}

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
            :remove(validTypeJson, "object"), getTypeof(value))) {

            const getTypeDetails = validTypeJson[getTypeof(value)];

            let inc=zero;

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

export default parseString;

