const getTypeof = require('./getTypeof');
const indexOfNotExist = require("./indexOfNotExist");
const has = require('./has');

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

    if (has(value) && indexOfNotExist(gettypeof, notInList)) {

        return value.toString();

    }

    return '';

}
module.exports=toString;

