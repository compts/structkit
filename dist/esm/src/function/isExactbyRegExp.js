import getTypeof from './getTypeof.js';

import curryArg from '../core/curryArg.js';

import has from './has.js';

import {zero, one} from '../variable/defaultValue.js';

import each from './each.js';

/**
 * Looking the data in JSON and Array base on object value with the help regexp
 *
 * @since 1.0.1
 * @category Predicate
 * @param {any} whereValue Either Json or array
 * @param {any=} objectValue1 use as lookup data in data
 * @returns {boolean} Returns the boolean if the has the value with the help regexp you are looking at.
 * @example
 *
 * isExactbyRegExp({"test2": /\d/g}, {"test": 11,"test2": 11})
 * // => false
 */
function isExactbyRegExp (whereValue, objectValue1) {

    return curryArg(function (rawWhereValue, rawObjectValue1) {

        if (rawObjectValue1 === null) {

            return false;

        }

        if (getTypeof(rawWhereValue) !== "json" && getTypeof(rawWhereValue) !== "string" && getTypeof(rawWhereValue) !== "regexp" && getTypeof(rawWhereValue) !== "number") {

            return false;

        }

        const key_s=(/(json|array)/g).test(getTypeof(rawObjectValue1))
            ?rawObjectValue1
            :[rawObjectValue1];
        let cnt=zero;
        let local_is_valid = null;

        each(key_s, function (kv, kk) {

            if (getTypeof(rawWhereValue) === "json") {

                if (has(rawWhereValue[kk])) {

                    if (getTypeof(rawWhereValue[kk]) === "regexp") {

                        local_is_valid = rawWhereValue[kk];

                    } else {

                        local_is_valid = new RegExp(rawWhereValue[kk]);

                    }
                    if (local_is_valid.test(kv)) {

                        cnt += one;

                    }

                }

            } else {

                if (getTypeof(rawWhereValue) === "regexp") {

                    local_is_valid = rawWhereValue;

                } else {

                    local_is_valid = new RegExp(rawWhereValue);

                }
                if (local_is_valid.test(kv)) {

                    cnt += one;

                }

            }

        });

        return cnt >zero;

    }, [
        whereValue,
        objectValue1
    ]);

}
export default isExactbyRegExp;

