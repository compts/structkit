const getTypeof = require('./getTypeof');

const has = require('./has');

const each = require('./each');


/**
 * Is Exact by Regexp
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} objectValue1 The first number in an addition.
 * @param {string} objectValue2 The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * isExactbyRegExp('')
 * // => false
 */
function isExactbyRegExp (objectValue1, objectValue2) {

    const zero =0;

    if (objectValue2===null) {

        return false;

    }

    if (getTypeof(objectValue2)!=="json" && getTypeof(objectValue2)!=="string" && getTypeof(objectValue2)!=="regexp" && getTypeof(objectValue2)!=="number") {

        return false;

    }

    const key_s=(/(json|array)/g).test(getTypeof(objectValue1))
        ?objectValue1
        :[objectValue1];
    let cnt=0;
    const incrementDefaultValue=1;
    let local_is_valid = null;

    each(key_s, function (kk, kv) {

        if (getTypeof(objectValue2)==="json") {

            if (has(objectValue2[kk])) {

                if (getTypeof(objectValue2[kk])==="regexp") {

                    local_is_valid = objectValue2[kk];

                } else {

                    local_is_valid = new RegExp(objectValue2[kk]);

                }
                if (local_is_valid.test(kv)) {

                    cnt+=incrementDefaultValue;

                }

            }

        } else {

            if (getTypeof(objectValue2)==="regexp") {

                local_is_valid = objectValue2;

            } else {

                local_is_valid = new RegExp(objectValue2);

            }
            if (local_is_valid.test(kv)) {

                cnt+=incrementDefaultValue;

            }

        }

    });

    return cnt >zero;

}
module.exports=isExactbyRegExp;

