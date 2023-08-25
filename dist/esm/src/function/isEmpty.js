import getTypeof from './getTypeof';

import count from './count';

/**
 * Check if data is empty
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value JSON , Array and String
 * @returns {boolean} Returns true or false
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    const zero =0;

    const typeofvalue = getTypeof(value);

    if (typeofvalue=== "json" || typeofvalue === "array") {

        return count(value, true)===zero;

    }
    if (typeofvalue=== "number") {

        return value===zero;

    }

    return (/^\s*$/gmi).test(value);

}
export default isEmpty;

