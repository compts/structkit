import toString from './toString.js';

import {whitespace} from '../variable/htmlentity.js';

import getTypeof from './getTypeof.js';

import indexOfExist from './indexOfExist.js';

/**
 * String trim  at the start only
 *
 * @since 1.4.86
 * @category String
 * @param {string} value String data that you want to trim
 * @param {any=} remove_value Replace preferred value to remove
 * @returns {string} Returns trim data in start of string
 * @example
 *
 * trimStart(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss '
 */
function trimStart (value, remove_value) {

    const rx = new RegExp('^[' + whitespace + ']*');

    let rawValue = toString(value).replace(rx, "");

    if (indexOfExist(getTypeof(remove_value), ["string"])) {

        const regData = new RegExp("^("+remove_value+")", "g");

        rawValue = rawValue.replace(regData, "");

    }

    return rawValue;

}
export default trimStart;

