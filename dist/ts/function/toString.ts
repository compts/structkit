const getTypeof = require('./getTypeof');
const indexOfNotExist = require("./indexOfNotExist");
const has = require('./has');
const varExtend = require('./varExtend');

/**
 * To String
 *
 * @since 1.4.5
 * @category String
 * @param {any=} value Value you to convert in double
 * @param {any=} option Additional options for conversion
 * @returns {string} Return in double.
 * @example
 *
 * toString(1)
 *=> '1'
 */
function toString (value, option) {

    const defaultOption = varExtend({
        "raw": false
    }, option);

    const notInList = [
        "object",
        "json",
        "promise"
    ];

    const gettypeof = getTypeof(value);

    if (has(value) && indexOfNotExist(gettypeof, notInList)) {

        if (defaultOption.raw) {

            return String.raw({"raw": [value]});

        }

        return value.toString();

    }

    return '';

}
module.exports=toString;

