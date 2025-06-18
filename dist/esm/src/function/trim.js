import toString from './toString.js';

import trimStart from './trimStart.js';

import trimEnd from './trimEnd.js';

import getTypeof from './getTypeof.js';

import indexOfExist from './indexOfExist.js';

/**
 * String trim
 *
 * @since 1.4.8
 * @category String
 * @param {string} value String data that you want to trim
 * @param {any=} remove_value Replace preferred value to remove
 * @returns {string} Returns trim data
 * @example
 *
 * trim(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss'
 */
function trim (value, remove_value) {

    let rawValue = toString(value);

    rawValue = trimStart(rawValue);
    rawValue = trimEnd(rawValue);

    rawValue = rawValue.trim();

    if (indexOfExist([
        "string",
        "regexp"
    ], getTypeof(remove_value))) {

        rawValue = rawValue.replace(remove_value, "");

    }

    return rawValue;

}
export default trim;

