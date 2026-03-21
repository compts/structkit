import toString from '../function/toString.js';

import each from '../function/each.js';

import {getTypeofInternal} from './getTypeOf.js';

/**
 * Get Data in array or json using string to search the data either by its key or index
 *
 * @since 1.4.87
 * @category Collection
 * @param {any=} data Either Json or Array data.
 * @returns {any} Returns the total.
 * @example
 *
 * schemaSplitData("s")
 *=> ["s"]
 * @example
 * schemaSplitData("a:a")
 *=> ["a","a"]
 */
function schemaSplitData (data) {

    if (getTypeofInternal(data) === "array") {

        return data;

    }

    const splitSign = "($^&^$)";
    const split_strReplace= toString(data).replace(/([\\.:]+)/g, function (mm, mm1) {

        if ((/^(\\\.)$/g).test(mm1)) {

            return ".";

        }

        if ((/^(\\:)$/g).test(mm1)) {

            return ":";

        }

        return splitSign;

    });

    const spl_len= split_strReplace.split(splitSign);
    const spl=[];

    each(spl_len, function (value) {

        spl.push(value);

    });

    return spl;

}

export {schemaSplitData};
