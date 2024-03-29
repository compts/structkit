import getTypeof from './getTypeof';

import has from './has';

import each from './each';

import indexOf from './indexOf';

import count from './count';

/**
 * Looking the data in JSON and Array base on object value
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue1 Json or Array
 * @param {any} objectValue2 Json or Array for lookup to objectValue1
 * @param {boolean=} isExist Default value is True
 * @returns {boolean} Returns the boolean if the has the value you are looking at.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 */
function isExact (objectValue1, objectValue2, isExist) {

    if (objectValue2===null) {

        return false;

    }

    const local_is_exist=has(isExist)&&getTypeof(isExist)==="boolean"
        ?isExist
        :true;
    const val_s=(/(json|array)/g).test(getTypeof(objectValue2))
        ?objectValue2
        :[objectValue2];
    const key_s=(/(json|array)/g).test(getTypeof(objectValue1))
        ?objectValue1
        :[objectValue1];
    let cnt=0;
    const incrementDefaultValue=1;
    const emptyDefaultValue=0;
    const notExistArrayDefaultValue=-1;

    each(key_s, function (kk, kv) {

        if (getTypeof(objectValue2)==="json") {

            if (has(val_s[kk])) {

                const local_is_valid = local_is_exist
                    ?val_s[kk]===kv
                    :val_s[kk]!==kv;

                if (local_is_valid) {

                    cnt+=incrementDefaultValue;

                }

            }

        }

        if (getTypeof(objectValue2)==="array") {

            const local_is_valid = local_is_exist
                ?indexOf(val_s, kv)>notExistArrayDefaultValue
                :indexOf(val_s, kv)===notExistArrayDefaultValue;

            if (local_is_valid) {

                cnt+=incrementDefaultValue;

            }

        }

    });

    if (cnt===emptyDefaultValue) {

        return false;

    }

    return cnt===count(objectValue2);

}
export default isExact;

