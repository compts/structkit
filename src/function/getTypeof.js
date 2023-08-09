const isJson = require("./isJson");

/**
 * Get type of the variable
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

    const objectType = Object.prototype.toString.call(objectValue);

    if (objectType==="[object Object]") {

        return isJson(objectValue, "object")
            ?"json"
            :"object";

    }

    if (objectType==="[object Array]") {

        return "array";

    }
    if (objectType==="[object RegExp]") {

        return "regexp";

    }
    if (objectType==="[object Promise]") {

        return "promise";

    }

    return typeof objectValue;

}
module.exports=getTypeof;

