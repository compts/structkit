import dataTypeFormat from '../core/dataTypeFormat';

/**
 * To Array
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|string|object} value The second number in an addition.
 * @returns {array} Returns the total.
 * @example
 *
 * toArray(1)
 *=>[1]
 */
function toInteger (value) {

    const zero = 0;

    return parseFloat(dataTypeFormat(/(\d)/g, zero, value===null
        ?zero
        :value));

}
export default toInteger;
