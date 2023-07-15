import has from './has';

import each from './each';

import getTypeof from './getTypeof';

/**
 * To map the value of json ot array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {any} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * map([1,2],1,2 )
 *=>[2]
 */
function map (objectValue, func) {

    const strTypeOf =getTypeof(objectValue);
    const emptyDefaultValue=0;
    const incrementDefaultValue=1;
    const value_arry=strTypeOf==="array"
        ?[]
        :{};
    let cnt=emptyDefaultValue;

    each(objectValue, function (key, value) {

        if (has(func)) {

            if (strTypeOf==="array") {

                value_arry.push(func(value, key, cnt));
                cnt+=incrementDefaultValue;

            } else {

                const dataFunc = func(value, key, cnt);

                value_arry[key] = dataFunc;

            }

        }

    });

    return value_arry;

}
export default map;

