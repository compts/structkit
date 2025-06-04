import {getTypeofInternal} from '../core/getTypeOf.js';

import {zero} from '../core/defaultValue.js';

import count from './count.js';

import indexOfExist from './indexOfExist.js';

/**
 * Check if data is empty, null and undefined are now considered as empty
 *
 * @since 1.0.1
 * @category Relation
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

    if (indexOfExist(invalidList, typeofvalue)) {

        return true;

    }

    if (typeofvalue === "uint16Array") {

        return value.length ===zero;

    }
    if (typeofvalue === "uint8Array") {

        return value.length ===zero;

    }

    return (/^\s*$/gmi).test(value);

}
export default isEmpty;

