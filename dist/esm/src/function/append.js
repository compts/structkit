const getTypeof = require('./getTypeof');


/**
 * Append data fir json and array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The first number in an addition.
 * @param {any} val The second number in an addition.
 * @param {any} key The second number in an addition.
 * @returns {any[]} Returns the total.
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
module.exports=append;
