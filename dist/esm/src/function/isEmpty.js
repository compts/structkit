import {getTypeofInternal} from '../core/getTypeOf.js';

import {zero} from '../variable/defaultValue.js';

import count from './count.js';

import indexOfExist from './indexOfExist.js';

/**
 * Check if data is empty, null and undefined are now considered as empty
 *
 * @since 1.0.1
 * @category Predicate
 * @param {any} value JSON , Array and String
 * @returns {boolean} Returns true or false
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    const typeofvalue = getTypeofInternal(value);

    const invalidList = [
        'null',
        'undefined'
    ];

    if (typeofvalue === "json" || typeofvalue === "array") {

        return count(value, typeofvalue === "json") === zero;

    }
    if (typeofvalue === "number") {

        return value === zero;

    }

    if (indexOfExist(typeofvalue, invalidList)) {

        return true;

    }

    if (indexOfExist(typeofvalue, [
        "uint16Array",
        "uint8Array"
    ])) {

        return value.length ===zero;

    }
    if (indexOfExist(typeofvalue, [
        "set",
        "map"
    ])) {

        return value.size ===zero;

    }

    return (/^\s*$/gmi).test(value);

}
export default isEmpty;

