import toString from './toString.mjs';

import {whitespace} from '../variable/htmlentity.mjs';

import getTypeof from './getTypeof.mjs';

import indexOfExist from './indexOfExist.mjs';

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

    if (indexOfExist(getTypeof(remove_value), ["string"])) {

        const regData = new RegExp("("+remove_value+")$", "g");

        rawValue = rawValue.replace(regData, "");

    }

    return rawValue;

}
export default trimEnd;

