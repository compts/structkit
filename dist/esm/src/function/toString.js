import getTypeof from './getTypeof.js';

import indexOfNotExist from './indexOfNotExist.js';

import has from './has.js';

/**
 * To String
 *
 * @since 1.4.5
 * @category String
 * @param {any=} value Value you to convert in double
 * @returns {string} Return in double.
 * @example
 *
 * toString(1)
 *=> '1'
 */
function toString (value) {

    const notInList = [
        "object",
        "json",
        "promise"
    ];

    const gettypeof = getTypeof(value);

    if (has(value) && indexOfNotExist(notInList, gettypeof)) {

        return value.toString();

    }

    return '';

}
export default toString;

