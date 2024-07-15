import has from './has.js';

import toString from './toString.js';

import each from './each.js';

import curryArg from '../core/curryArg.js';

/**
 * Get Data in array or json using string to search the data
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Either Json or Array data.
 * @param {any} split_str Search key or index.
 * @returns {any} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=> 1
 * @example
 * getData({"a":{"a":2},"b":{"a":3}},"a:a")
 *=> {a: 2}
 */
function getData (objectValue, split_str) {

    return curryArg(function (rawObjectValue, rawSplit_str) {

        const split_strReplace= toString(rawSplit_str).replace(/([.]{1,})/g, ":");
        const spl_len=split_strReplace.split(":");
        const spl=[];
        let jsn_total={};

        if (!has(rawObjectValue)) {

            return "";

        }

        each(spl_len, function (key, value) {

            spl.push(value);

        });

        each(spl, function (key, value) {

            try {

                if (has(rawObjectValue, value)) {

                    if ((/^\s+$/).test(rawObjectValue[value]) === false) {

                        jsn_total=rawObjectValue[value];

                    }

                } else {

                    if (has(jsn_total, value)) {

                        jsn_total=jsn_total[value];

                    }

                }

            } catch (error) {

                console.log(error);

            }

        });

        return jsn_total;

    }, [
        objectValue,
        split_str
    ]);

}
export default getData;

