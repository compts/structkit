
const isJson = require("../function/isJson");
const has = require("./_has");

const {objectCallTypeAll} = require("../variable/types");

/**
 * Get type of the variable
 *
 * @since 1.4.8
 * @category String
 * @param {any} objectValue Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * getTypeofInternal([])
 * => array
 */
function getTypeofInternal (objectValue) {

    const objectType = Object.prototype.toString.call(objectValue);

    if (objectType === "[object Object]") {


        return isJson(objectValue, "object")
            ?"json"
            :"object";

    }

    if (has(objectCallTypeAll, objectType)) {

        return objectCallTypeAll[objectType];

    }

    return typeof objectValue;

}

exports.getTypeofInternal = getTypeofInternal;
