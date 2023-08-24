const has = require('./has');

const getTypeof = require('./getTypeof');

const indexOfExist = require('./indexOfExist');
const getKey = require('./getKey');


/**
 * Var extend is use for cloning Json, Array or Object
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue Json, Array or Object
 * @param {object} objectValueReplace Json, Array or Object that you want to assign to `objectValue`
 * @returns {array} Return Json or Array or Object.
 * @example
 *
 * varExtend({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function varExtend (objectValue, objectValueReplace) {

    const jsn_bool={
        "false": false,
        "true": true
    };

    const listValid = [
        "json",
        "object"
    ];

    if (indexOfExist(listValid, getTypeof(objectValue)) && indexOfExist(listValid, getTypeof(objectValueReplace))) {

        const jsn_s={};

        for (const key in objectValue) {

            if (has(objectValue[key])) {

                if (indexOfExist(getKey(jsn_bool), objectValue[key].toString().toLowerCase())) {

                    jsn_s[key]=jsn_bool[objectValue[key].toString().toLowerCase()];

                } else {

                    jsn_s[key]=objectValue[key];

                }

            } else {

                jsn_s[key]=objectValue[key];

            }


        }

        for (const key in objectValueReplace) {

            if (has(jsn_s, key)) {

                if (getTypeof(jsn_s[key]) ==="json") {

                    jsn_s[key]=replaceValue(jsn_s[key], objectValueReplace[key]);

                } else {

                    jsn_s[key]=objectValueReplace[key];

                }

            }

        }

        return jsn_s;

    }

    return objectValue;

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

        if (getTypeof(objectValue[key]) ==="json") {

            objectValue[key] =replaceValue(objectValue[key], objectValueReplace[key]);

        } else {

            objectValue[key] = objectValueReplace[key];

        }

    }

    return objectValue;

}
module.exports=varExtend;

