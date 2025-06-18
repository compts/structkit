import toString from './toString.js';

import {whitespace} from '../variable/htmlentity.js';

import getTypeof from './getTypeof.js';

import indexOfExist from './indexOfExist.js';

/**
 * String trim at the end only
 *
 * @since 1.4.86
 * @category String
 * @param {string} value String data that you want to trim
 * @param {any=} remove_value Replace preferred value to remove
 * @returns {string} Returns trim data in end of string
 * @example
 *
 * trimEnd(' The fish is goad   with Goat-1ss ')
 *=> ' The fish is goad   with Goat-1ss'
 */
function trimEnd (value, remove_value) {

    const rx = new RegExp('[' + whitespace + ']*$');

    let rawValue= toString(value).replace(rx, "");

    if (indexOfExist([
        "string",
        "regexp"
    ], getTypeof(remove_value))) {

        rawValue = rawValue.replace(remove_value, "");

    }

    return rawValue;

}
export default trimEnd;

