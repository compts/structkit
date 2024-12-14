import toString from './toString.js';

import {whitespace} from '../variable/htmlentity.js';

/**
 * String trim at the end only
 *
 * @since 1.4.86
 * @category String
 * @param {string} value String data that you want to trim
 * @returns {string} Returns trim data in end of string
 * @example
 *
 * trimEnd(' The fish is goad   with Goat-1ss ')
 *=> ' The fish is goad   with Goat-1ss'
 */
function trimEnd (value) {

    const rx = new RegExp('[' + whitespace + ']*$');

    return toString(value).replace(rx, "");

}
export default trimEnd;
