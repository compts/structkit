
import isJson from '../function/isJson.js';

import has from './_has.js';

import {objectCallTypeAll} from '../variable/types.js';

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

        try {

            return isJson(objectValue, "object")
                ?"json"
                :"object";

        } catch (err) {

            return "object";

        }

    }

    if (has(objectCallTypeAll, objectType)) {

        return objectCallTypeAll[objectType];

    }

    return typeof objectValue;

}

export {getTypeofInternal};
