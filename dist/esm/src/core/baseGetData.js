import toString from '../function/toString.js';

import each from '../function/each.js';

/**
 * Get Data in array or json using string to search the data either by its key or index
 *
 * @since 1.4.87
 * @category Collection
 * @param {any=} data Either Json or Array data.
 * @returns {any} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=> 1
 * @example
 * getData({"a":{"a":2},"b":{"a":3}},"a:a")
 *=> {a: 2}
 */
function schemaSplitData (data) {

    const split_strReplace= toString(data).replace(/([.]{1,})/g, ":");

    const spl_len= split_strReplace.split(":");
    const spl=[];

    each(spl_len, function (value) {

        spl.push(value);

    });

    return spl;

}

export {schemaSplitData};
