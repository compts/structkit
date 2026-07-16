import strLower from './strLower.mjs';

import getTypeof from './getTypeof.mjs';

import indexOfExist from './indexOfExist.mjs';

import {one} from '../variable/defaultValue.mjs';

/**
 * To extract string invalid boolean and convert to boolean
 *
 * @since 1.4.872
 * @category Boolean
 * @param {any} value Value you to convert in boolean
 * @returns {boolean} Return in boolean.
 * @example
 *
 * toBoolean("true")
 *=>true
 */
function toBoolean (value) {

    if (getTypeof(value) === "string") {

        return indexOfExist(strLower(value), [
            'true',
            't',
            'yes',
            'y',
            'on',
            '1'
        ]);

    }

    if (getTypeof(value) === "number") {

        return indexOfExist(value, [one]);

    }

    if (getTypeof(value) === "boolean") {

        return value;

    }

    return false;

}
export default toBoolean;

