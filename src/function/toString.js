const getTypeof = require('./getTypeof');
const indexOfNotExist = require("./indexOfNotExist");
const has = require('./has');

/**
 * To String
 *
 * @since 1.4.5
 * @category Seq
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

    if (has(value) && indexOfNotExist(notInList, gettypeof)) {

        return value.toString();

    }

    return '';

}
module.exports=toString;

