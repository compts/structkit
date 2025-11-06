const strLower = require("./strLower");
const getTypeof = require("./getTypeof");
const indexOfExist = require("./indexOfExist");
const {one} = require("../variable/defaultValue");

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
module.exports=toBoolean;

