import has from './has';

import each from './each';

import {getTypeofInternal} from '../core/getTypeOf';

import empty from './empty';

import curryArg from '../core/curryArg';

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

    return curryArg(function (rawObjectValue, rawFunc) {

        const strTypeOf =getTypeofInternal(rawObjectValue);
        const emptyDefaultValue=0;
        const incrementDefaultValue=1;
        const value_arry=empty(rawObjectValue);
        let cnt=emptyDefaultValue;

        const that = this;

        each(rawObjectValue, function (key, value) {

            if (has(rawFunc)) {

                const dataFunc = rawFunc.apply(
                    that,
                    [
                        value,
                        key,
                        cnt
                    ]
                );

                if (strTypeOf === "array") {

                    value_arry.push(dataFunc);

                } else {

                    value_arry[key] = dataFunc;

                }

                cnt += incrementDefaultValue;

            }

        });

        return value_arry;

    }, [
        objectValue,
        func
    ]);

}
export default map;

