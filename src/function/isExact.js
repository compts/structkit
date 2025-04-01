const {getTypeofInternal} = require('../core/getTypeOf');

const has = require('./has');

const each = require('./each');

const count = require('./count');

const isEmpty = require('./isEmpty');

const getData = require('./getData');
const indexOfExist = require('./indexOfExist');
const indexOfNotExist = require('./indexOfNotExist');
const {two} = require("../core/defaultValue");
const curryArg = require("../core/curryArg");


/**
 * Looking the data in JSON and Array base on object value
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} whereValue Json or Array
 * @param {any} objectValue1 Json or Array for lookup to whereValue
 * @param {boolean=} isExist Default value is True
 * @returns {boolean|any} Returns the boolean if the has the value you are looking at.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 *
 * isExact({"s1":{"s2":2}},{"s1:s2":2})
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
        let cnt=0;
        const incrementDefaultValue=1;

        each(key_s, function (kv, kk) {

            if (indexOfExist([
                "json",
                "object"
            ], getTypeofInternal(rawWhereValue))) {

                if (has(val_s, kk)) {

                    const local_is_valid = localValidation(val_s[kk], kv, local_is_exist);


                    if (local_is_valid) {

                        cnt += incrementDefaultValue;

                    }

                }

            }

            if (getTypeofInternal(rawWhereValue) === "array") {

                const local_is_valid = local_is_exist
                    ?indexOfExist(val_s, kv)
                    :indexOfNotExist(val_s, kv);

                if (local_is_valid) {

                    cnt += incrementDefaultValue;

                }

            }

        });

        if (isEmpty(cnt)) {

            each(val_s, function (kv, kk) {

                if (indexOfExist([
                    "json",
                    "object"
                ], getTypeofInternal(rawWhereValue))) {

                    const gdata = getData(key_s, kk);

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
module.exports=isExact;

