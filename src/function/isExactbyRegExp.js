const getTypeof = require('./getTypeof');

const has = require('./has');
const {zero} = require("../core/defaultValue");
const each = require('./each');

/**
 * Looking the data in JSON and Array base on object value with the help regexp
 *
 * @since 1.0.1
 * @category Relation
 * @param {any} whereValue Either Json or array
 * @param {any} objectValue1 use as lookup data in data
 * @returns {boolean} Returns the boolean if the has the value with the help regexp you are looking at.
 * @example
 *
 * isExactbyRegExp({"test": 11,"test2": 11}, {"test2": /\d/g})
 * // => false
 */
function isExactbyRegExp (whereValue, objectValue1) {


    if (objectValue1 === null) {

        return false;

    }

    if (getTypeof(whereValue) !== "json" && getTypeof(whereValue) !== "string" && getTypeof(whereValue) !== "regexp" && getTypeof(whereValue) !== "number") {

        return false;

    }

    const key_s=(/(json|array)/g).test(getTypeof(objectValue1))
        ?objectValue1
        :[objectValue1];
    let cnt=0;
    const incrementDefaultValue=1;
    let local_is_valid = null;

    each(key_s, function (kv, kk) {

        if (getTypeof(whereValue) === "json") {

            if (has(whereValue[kk])) {

                if (getTypeof(whereValue[kk]) === "regexp") {

                    local_is_valid = whereValue[kk];

                } else {

                    local_is_valid = new RegExp(whereValue[kk]);

                }
                if (local_is_valid.test(kv)) {

                    cnt += incrementDefaultValue;

                }

            }

        } else {

            if (getTypeof(whereValue) === "regexp") {

                local_is_valid = whereValue;

            } else {

                local_is_valid = new RegExp(whereValue);

            }
            if (local_is_valid.test(kv)) {

                cnt += incrementDefaultValue;

            }

        }

    });

    return cnt >zero;

}
module.exports=isExactbyRegExp;

