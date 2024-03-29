import {getTypeofInternal} from '../core/getTypeOf';

import count from './count';

import indexOfExist from './indexOfExist';

/**
 * Check if data is empty, null and undefined are now considered as empty
 *
 * @since 1.0.1
 * @category Boolean
 * @param {any} value JSON , Array and String
 * @returns {boolean} Returns true or false
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    const zero =0;

    const typeofvalue = getTypeofInternal(value);

    const invalidList = [
        'null',
        'undefined'
    ];

    if (typeofvalue === "json" || typeofvalue === "array") {

        return count(value, true) === zero;

    }
    if (typeofvalue === "number") {

        return value === zero;

    }

    if (indexOfExist(invalidList, typeofvalue)) {

        return true;

    }

    return (/^\s*$/gmi).test(value);

}
export default isEmpty;

