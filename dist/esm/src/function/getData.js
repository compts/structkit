import has from './has.js';

import each from './each.js';

import empty from './empty.js';

import isEmpty from './isEmpty.js';

import curryArg from '../core/curryArg.js';

import inc from './inc.js';

import {schemaSplitData} from '../core/baseGetData.js';

import {zero, two} from '../variable/defaultValue.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

/**
 * Get Data in array or json using string to search the data either by its key or index
 *
 * @since 1.0.1
 * @category Collection
 * @param {any=} split_str Search key or index.
 * @param {any=} objectValue Either Json or Array data.
 * @param {any=} isStrict to check if delimiter are match in counter, default value is false.
 * @returns {any} Returns the total.
 * @example
 *
 * getData("s", {"s":1})
 *=> 1
 * @example
 * getData("a:a",{"a":{"a":2},"b":{"a":3}})
 *=> {a: 2}
 */
function getData (split_str, objectValue, isStrict) {

    const refIsStrict = isStrict || false;

    if (getTypeofInternal(split_str) === "undefined") {

        return split_str;

    }

    return curryArg(function (rawSplit_str, rawObjectValue) {

        if (!has(rawObjectValue) || isEmpty(rawObjectValue)) {

            return empty(rawObjectValue);

        }

        const spl= schemaSplitData(rawSplit_str);

        let jsn_total={};
        let counter = zero;

        each(spl, function (value) {

            if (has(rawObjectValue, value)) {

                if ((/^\s+$/).test(rawObjectValue[value]) === false) {

                    jsn_total=rawObjectValue[value];
                    counter=inc(counter);

                }

            } else {

                if (has(jsn_total, value)) {

                    jsn_total=jsn_total[value];
                    counter=inc(counter);

                }

            }

        });

        if (refIsStrict && spl.length !== counter) {

            return spl.length === counter
                ?jsn_total
                :null;

        }

        return jsn_total;

    }, [
        split_str,
        objectValue
    ], two);

}
export default getData;

