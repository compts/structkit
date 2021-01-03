import has from './has';
import getTypeof from './getTypeof';
import each from './each';

/**
 * Array Count
 *
 * @since 1.0.1
 * @category Seq
 * @param {array} objectValue The second number in an addition.
 * @param {boolean} bol The second number in an addition.
 * @returns {int} Returns the total.
 * @example
 *
 * count([1,2])
 * // => 2
 */
function count (objectValue, bol) {

    let cnt=0;
    const incByOne=1;
    const defaultValueForFalse=0;
    const bol_d=bol||false;
    const get_json=getTypeof(objectValue);

    if (has(objectValue)===false) {

        return defaultValueForFalse;

    }

    if (get_json==="object" && has(objectValue, "style")&&has(objectValue, "nodeType")&&has(objectValue, "ownerDocument")) {

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

    if (get_json==="json"&&bol_d===true) {

        const jsn_parse=objectValue;
        let cnts=0;

        each(jsn_parse, function () {

            cnts+=incByOne;

        });

        return cnts;

    }

    return cnt;

}
export default count;
