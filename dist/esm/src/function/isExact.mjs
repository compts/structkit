import {getTypeofInternal} from '../core/getTypeOf.mjs';

import has from './has.mjs';

import each from './each.mjs';

import count from './count.mjs';

import isEmpty from './isEmpty.mjs';

import getData from './getData.mjs';

import indexOfExist from './indexOfExist.mjs';

import indexOfNotExist from './indexOfNotExist.mjs';

import {zero, one, two} from '../variable/defaultValue.mjs';

import curryArg from '../core/curryArg.mjs';

/**
 * Looking the data in JSON and Array base on object value
 *
 * @since 1.0.1
 * @category Predicate
 * @param {any} whereValue Json or Array
 * @param {any=} objectValue1 Json or Array for lookup to whereValue
 * @param {boolean=} isExist Default value is True
 * @returns {boolean|any} Returns the boolean if the has the value you are looking at.
 * @example
 *
 * isExact({"test2": 11},{"test": 11,"test2": 11})
 * // => true
 *
 * isExact({"s1:s2":2}, {"s1":{"s2":2}})
 * // => true
 */
function isExact (whereValue, objectValue1, isExist) {

    return curryArg(function (rawWhereValue, rawObjectValue1, rawIsExist) {

        if (rawObjectValue1 === null) {

            return false;

        }

        const local_is_exist=has(rawIsExist)&&getTypeofInternal(rawIsExist) === "boolean"
            ?rawIsExist
            :true;
        const val_s=(/(json|array|object)/g).test(getTypeofInternal(rawWhereValue))
            ?rawWhereValue
            :[rawWhereValue];
        const key_s=(/(json|array|object)/g).test(getTypeofInternal(rawObjectValue1))
            ?rawObjectValue1
            :[rawObjectValue1];
        let cnt=zero;
        const incrementDefaultValue=one;

        each(key_s, function (kv, kk) {

            if (indexOfExist(getTypeofInternal(rawWhereValue), [
                "json",
                "object"
            ])) {

                if (has(val_s, kk)) {

                    const local_is_valid = localValidation(val_s[kk], kv, local_is_exist);

                    if (local_is_valid) {

                        cnt += incrementDefaultValue;

                    }

                }

            }

            if (getTypeofInternal(rawWhereValue) === "array") {

                const local_is_valid = local_is_exist
                    ?indexOfExist(kv, val_s)
                    :indexOfNotExist(kv, val_s);

                if (local_is_valid) {

                    cnt += incrementDefaultValue;

                }

            }

        });

        if (isEmpty(cnt)) {

            each(val_s, function (kv, kk) {

                if (indexOfExist(getTypeofInternal(rawWhereValue), [
                    "json",
                    "object"
                ])) {

                    const gdata = getData(kk, key_s);

                    if (!isEmpty(gdata)) {

                        const local_is_valid = localValidation(gdata, kv, local_is_exist);

                        if (local_is_valid) {

                            cnt += incrementDefaultValue;

                        }

                    }

                }

            });

        }

        return cnt === count(rawWhereValue);

    }, [
        whereValue,
        objectValue1,
        isExist
    ], two);

}

/**
 * Check the value if equal to each value
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} keys string or number
 * @param {any} vals string, number or function
 * @param {boolean=} isExist Default value is True
 * @returns {boolean} Returns the boolean if the has the value you are looking at.
 * @example
 *
 * localValidation("as","as",true)
 * // => true
 * localValidation("as","as",false)
 * // => false
 */
function localValidation (keys, vals, isExist) {

    if (isExist) {

        if (getTypeofInternal(vals) === "function") {

            return vals(keys);

        }

        return keys === vals;

    }

    if (getTypeofInternal(vals) === "function") {

        return vals(keys) === false;

    }

    return keys !== vals;

}
export default isExact;

