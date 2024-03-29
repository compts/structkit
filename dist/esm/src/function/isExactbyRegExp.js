import getTypeof from './getTypeof';

import has from './has';

import each from './each';

/**
 * Looking the data in JSON and Array base on object value with the help regexp
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} objectValue1 Either Json or array
 * @param {string} objectValue2 use as lookup data in data
 * @returns {boolean} Returns the boolean if the has the value with the help regexp you are looking at.
 * @example
 *
 * isExactbyRegExp({"test": 11,"test2": 11}, {"test2": /\d/g})
 * // => false
 */
function isExactbyRegExp (objectValue1, objectValue2) {

    const zero =0;

    if (objectValue2 === null) {

        return false;

    }

    if (getTypeof(objectValue2) !== "json" && getTypeof(objectValue2) !== "string" && getTypeof(objectValue2) !== "regexp" && getTypeof(objectValue2) !== "number") {

        return false;

    }

    const key_s=(/(json|array)/g).test(getTypeof(objectValue1))
        ?objectValue1
        :[objectValue1];
    let cnt=0;
    const incrementDefaultValue=1;
    let local_is_valid = null;

    each(key_s, function (kk, kv) {

        if (getTypeof(objectValue2) === "json") {

            if (has(objectValue2[kk])) {

                if (getTypeof(objectValue2[kk]) === "regexp") {

                    local_is_valid = objectValue2[kk];

                } else {

                    local_is_valid = new RegExp(objectValue2[kk]);

                }
                if (local_is_valid.test(kv)) {

                    cnt += incrementDefaultValue;

                }

            }

        } else {

            if (getTypeof(objectValue2) === "regexp") {

                local_is_valid = objectValue2;

            } else {

                local_is_valid = new RegExp(objectValue2);

            }
            if (local_is_valid.test(kv)) {

                cnt += incrementDefaultValue;

            }

        }

    });

    return cnt >zero;

}
export default isExactbyRegExp;

