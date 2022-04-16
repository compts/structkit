/**
 * Get Variable typeof
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * getTypeof([])
 * => array
 */
function getTypeof (objectValue) {

    if (Object.prototype.toString.call(objectValue)==="[object Object]") {

        return "json";

    }

    if (Object.prototype.toString.call(objectValue)==="[object Array]") {

        return "array";

    }
    if (Object.prototype.toString.call(objectValue)==="[object RegExp]") {

        return "regexp";

    }

    return typeof objectValue;

}
export default getTypeof;

