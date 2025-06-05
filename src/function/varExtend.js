const has = require('./has');
const getTypeof = require('./getTypeof');
const indexOfExist = require('./indexOfExist');
const getKey = require('./getKey');
const curryArg = require("../core/curryArg");
const stringLowerCase = require("./stringLowerCase");

/**
 * Var extend was use in replacing from `objectValueReplace` if not existed at objectValue
 *
 * @since 1.0.1
 * @category Collection
 * @param {object} objectValue Json, Array or Object
 * @param {object} objectValueReplace Json, Array or Object that you want to assign to `objectValue`
 * @returns {any} Return Json or Array or Object.
 * @example
 *
 * varExtend({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function varExtend (objectValue, objectValueReplace) {

    return curryArg(function (rawObjectValue, rawObjectValueReplace) {

        const jsn_bool={
            "false": false,
            "true": true
        };

        const listValid = [
            "json",
            "object"
        ];

        if (indexOfExist(listValid, getTypeof(rawObjectValue)) && indexOfExist(listValid, getTypeof(rawObjectValueReplace))) {

            const jsn_s={};

            for (const key in rawObjectValue) {

                if (has(rawObjectValue, key)) {

                    if (indexOfExist(getKey(jsn_bool), stringLowerCase(rawObjectValue[key]))) {

                        jsn_s[key]=jsn_bool[stringLowerCase(rawObjectValue[key])];

                    } else {

                        jsn_s[key]=rawObjectValue[key];

                    }

                }

            }

            for (const key in rawObjectValueReplace) {

                if (has(jsn_s, key)) {

                    if (getTypeof(jsn_s[key]) === "json") {

                        jsn_s[key]=replaceValue(jsn_s[key], rawObjectValueReplace[key]);

                    } else {

                        jsn_s[key]=rawObjectValueReplace[key];

                    }

                }

            }

            return jsn_s;

        }

        return objectValue;

    }, [
        objectValue,
        objectValueReplace
    ]);

}

/**
 * Replace Value
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue Json or Array
 * @param {object} objectValueReplace Json or Array that you want to assign to `objectValue`
 * @returns {array} Return Json or Array.
 * @example
 *
 * replaceValue({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function replaceValue (objectValue, objectValueReplace) {

    for (const key in objectValueReplace) {

        if (getTypeof(objectValue[key]) === "json") {

            objectValue[key] =replaceValue(objectValue[key], objectValueReplace[key]);

        } else {

            objectValue[key] = objectValueReplace[key];

        }

    }

    return objectValue;

}
module.exports=varExtend;

