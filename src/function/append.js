import getTypeof from './getTypeof';

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|Object|string} objectValue The first number in an addition.
 * @param {number|Object|string} val The second number in an addition.
 * @param {number|Object|string} key The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function append (objectValue, val, key) {

    const typeofs=getTypeof(objectValue);

    if (typeofs === "json") {

        objectValue[key]=val;

    }
    if (typeofs === "array") {

        objectValue.push(val);

    }

    return objectValue;

}
export default append;
