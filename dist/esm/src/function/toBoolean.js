import stringLowerCase from './stringLowerCase.js';

import getTypeof from './getTypeof.js';

import indexOfExist from './indexOfExist.js';

import {one} from '../variable/defaultValue.js';

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

        return indexOfExist(stringLowerCase(value), [
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

