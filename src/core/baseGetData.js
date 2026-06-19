const toString = require("../function/toString");
const each = require('../function/each');
const {getTypeofInternal} = require('./getTypeOf');

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
    const split_strReplace= toString(data).replace(/(\\?[.:])/g, function (mm, mm1) {

        if (mm1.trim() === "\\.") {

            return ".";

        }

        if (mm1.trim() === "\\:") {

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

exports.schemaSplitData = schemaSplitData;
