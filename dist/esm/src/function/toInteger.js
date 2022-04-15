const dataTypeFormat = require('../core/dataTypeFormat');


/**
 * To Array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * toArray(1)
 *=>[1]
 */
function toInteger (value) {

    const zero = 0;

    return parseInt(dataTypeFormat(/(\d)/g, zero, value===null
        ?zero
        :value));

}
module.exports=toInteger;

