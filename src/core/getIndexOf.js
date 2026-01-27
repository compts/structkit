const equal = require("../function/equal");

const {negOne, one} = require("../variable/defaultValue");
const {getTypeofInternal} = require("./getTypeOf");

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue Array
 * @param {any} value key of array
 * @param {number} start The first index in array
 * @param {number} end The last index in array
 * @param {boolean} isGetLast If True first index if False last index
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function getIndexOf (objectValue, value, start, end, isGetLast) {

    let referenceValue = negOne;

    if (getTypeofInternal(objectValue) === "array") {

        for (let inc=start; inc<end;) {

            let isValidMatch = false;

            if (getTypeofInternal(value) === "json") {

                isValidMatch = equal(objectValue[inc], value);

            } else if (getTypeofInternal(value) === "function") {

                isValidMatch = value(objectValue[inc]);

            } else {

                if (objectValue[inc] === value) {

                    isValidMatch = true;

                }

            }

            if (isValidMatch) {

                if (isGetLast === false) {

                    return inc;

                }
                referenceValue = inc;

            }

            inc += one;

        }

    }

    return isGetLast === false
        ?negOne
        :referenceValue;

}

exports.getIndexOf=getIndexOf;

