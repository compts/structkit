const dataNumberFormat = require('../core/dataTypeFormat');

/**
 * To extract number in string and convert to , it will also remove all none numeric
 *
 * @since 1.0.1
 * @category Number
 * @param {any} value Value you to convert in integer
 * @returns {number} Return in integer.
 * @example
 *
 * toInteger("11d")
 *=>11
 */
function toInteger (value) {

    const zero = 0;

    return parseInt(dataNumberFormat(/(\d)/g, zero, value === null
        ?zero
        :value));

}
module.exports=toInteger;

