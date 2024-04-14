import has from './has';

import each from './each';

import {getTypeofInternal} from '../core/getTypeOf';

import empty from './empty';

/**
 * To map the value of json or array
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any=} func Callback function
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * map([1,2],function(value) { return value+2 } )
 *=> [3, 4]
 */
function map (objectValue, func) {

    const strTypeOf =getTypeofInternal(objectValue);
    const emptyDefaultValue=0;
    const incrementDefaultValue=1;
    const value_arry=empty(objectValue);
    let cnt=emptyDefaultValue;

    each(objectValue, function (key, value) {

        if (has(func)) {

            if (strTypeOf === "array") {

                value_arry.push(func(value, key, cnt));
                cnt += incrementDefaultValue;

            } else {

                const dataFunc = func(value, key, cnt);

                value_arry[key] = dataFunc;

            }

        }

    });

    return value_arry;

}
export default map;

