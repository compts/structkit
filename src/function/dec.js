const {zero, one} = require("../core/defaultValue");
const getTypeof = require('./getTypeof');

/**
 * Decrement value
 *
 * @since 1.4.8
 * @category Math
 * @param {any} value Value you want to convert in array
 * @param {any} default_value Value you want to convert in array
 * @returns {any[]} Return in array.
 * @example
 *
 * dec(1)
 *=>0
 */
function dec (value, default_value) {

    let return_val = value;
    let inc_n = one;

    if (getTypeof(default_value) === "number") {

        inc_n = default_value;

    }

    if (getTypeof(return_val) === "number") {

        return_val -= inc_n;

        return return_val;

    }

    return zero;

}
module.exports=dec;

