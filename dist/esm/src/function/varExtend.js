import has from './has';
import getTypeof from './getTypeof';
import indexOf from './indexOf';


/**
 * Var extend
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue The second number in an addition.
 * @param {object} objectValueReplace The second number in an addition.
 * @returns {array} Returns the total.
 * @example
 *
 * varExtend({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function varExtend (objectValue, objectValueReplace) {

    const onceDefaultValue=1;

    if (getTypeof(objectValue)==="json"&& getTypeof(objectValueReplace)==="json") {

        const jsn_s={};

        for (const key in objectValue) {

            if (indexOf([
                'true',
                'false'
            ], objectValue[key].toString().toLowerCase())>-onceDefaultValue) {

                const jsn_bool={
                    "false": false,
                    "true": true
                };

                jsn_s[key]=jsn_bool[objectValue[key].toString().toLowerCase()];

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
 * @param {any} objectValue The second number in an addition.
 * @param {any} objectValueReplace The second number in an addition.
 * @returns {any} Returns the total.
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
export {varExtend};

