const has = require('./has');

const getTypeof = require('./getTypeof');

const each = require('./each');


/**
 * Array Count
 *
 * @since 1.0.1
 * @category Math
 * @param {any} objectValue Json or array
 * @param {boolean=} json_is_empty_check If data is json, it will check its map data
 * @returns {number} Returns the total.
 * @example
 *
 * count([1,2])
 * // => 2
 *
 * count({"s" :1, "s2": 2}, true)
 * // => 2
 */
function count (objectValue, json_is_empty_check) {

    let cnt=0;
    const incByOne=1;
    const defaultValueForFalse=0;
    const json_is_empty_check_default=json_is_empty_check||false;
    const get_json=getTypeof(objectValue);

    if (has(objectValue)===false) {

        return defaultValueForFalse;

    }

    if (get_json==="array") {

        return objectValue.length;

    } else if (get_json==="object" && has(objectValue, "style")&&has(objectValue, "nodeType")&&has(objectValue, "ownerDocument")) {

        for (const inc in objectValue) {

            if (!isNaN(inc)) {

                cnt+=incByOne;

            }

        }

    } else {

        each(objectValue, function () {

            cnt+=incByOne;

        });

    }

    if (get_json==="json"&&json_is_empty_check_default===true) {

        const jsn_parse=objectValue;
        let cnts=0;

        each(jsn_parse, function () {

            cnts+=incByOne;

        });

        return cnts;

    }

    return cnt;

}
module.exports=count;

