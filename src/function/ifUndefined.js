import has from "./has";

/**
 * Check if is undefined
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number|object|string} value1 The first number in an addition.
 * @param {number|object|string} value2 The second number in an addition.
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * ifUndefined({'as':1}, 'as','as2')
 * // => 1
 */
function ifUndefined (objectValue, value1, value2) {

    if (!has(value2)) {

        if (has(objectValue)) {

            return objectValue;

        }

        return value1;

    }

    if (has(objectValue, value1)) {

        return objectValue[value1];

    }

    return value2;

}
export default ifUndefined;
