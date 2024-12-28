import toString from './toString.js';

import trimStart from './trimStart.js';

import trimEnd from './trimEnd.js';

/**
 * String trim
 *
 * @since 1.4.8
 * @category String
 * @param {string} value String data that you want to trim
 * @returns {string} Returns trim data
 * @example
 *
 * trim(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss'
 */
function trim (value) {

    let rawValue = toString(value);

    rawValue = trimStart(rawValue);
    rawValue = trimEnd(rawValue);

    return rawValue.trim();

}
export default trim;

