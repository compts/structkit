import has from './has';

import getTypeof from './getTypeof';

import indexOf from './indexOf';

import getKey from './getKey';

/**
 * Var extend
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue Json or Array
 * @param {object} objectValueReplace Json or Array that you want to assign to `objectValue`
 * @returns {array} Return Json or Array.
 * @example
 *
 * varExtend({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function varExtend (objectValue, objectValueReplace) {

    const onceDefaultValue=1;
    const jsn_bool={
        "false": false,
        "true": true
    };

    if (getTypeof(objectValue)==="json"&& getTypeof(objectValueReplace)==="json") {

        const jsn_s={};

        for (const key in objectValue) {

            if (has(objectValue[key])) {

                if (indexOf(getKey(jsn_bool), objectValue[key].toString().toLowerCase())>-onceDefaultValue) {

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
 * varExtend({"s1":1},{"s1":2})
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
export default varExtend;

