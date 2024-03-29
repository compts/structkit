const count = require("../function/count");
const each = require("../function/each");
const has = require("../function/has");

const {getTypeofInternal} = require("./getTypeOf");

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue Array
 * @param {number} value key of array
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

    const indexOfDefaultValue=-1;
    const incrementDefaultValue=1;

    let referenceValue = -1;

    if (getTypeofInternal(objectValue) === "array") {

        for (let inc=start; inc<end;) {

            let isValidMatch = false;

            if (getTypeofInternal(value) === "json") {

                isValidMatch = searchValueInJson(objectValue[inc], value);

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

            inc += incrementDefaultValue;

        }

    }

    return isGetLast === false
        ?indexOfDefaultValue
        :referenceValue;

}

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue Array
 * @param {number} searchValue key of array
 * @returns {boolean} Returns the total.
 * @example
 *
 * searchValueInJson([1,2], 1)
 * // => 0
 */
function searchValueInJson (objectValue, searchValue) {

    if (count(objectValue) !== count(searchValue)) {

        return false;

    }
    let counter = 0;
    const increment = 1;

    each(objectValue, function (key, value) {

        if (has(searchValue, key)) {

            if (searchValue[key] === value) {

                counter += increment;

            }

        }

    });

    return count(objectValue) === counter;

}
exports.getIndexOf=getIndexOf;

