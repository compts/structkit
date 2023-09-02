import isJson from './isJson';

import has from './has';

import {objectCallTypeAll} from '../variable/types';

/**
 * Get type of the variable
 *
 * @since 1.0.1
 * @category String
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

    if (has(objectCallTypeAll, objectType)) {

        return objectCallTypeAll[objectType];

    }

    return typeof objectValue;

}
export default getTypeof;

