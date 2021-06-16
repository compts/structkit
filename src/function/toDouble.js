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
function toDouble (value) {

    const zero = 0.00;

    return parseFloat(dataTypeFormat(/(\d\.)/g, zero, value===null
        ?zero
        :value));

}
export default toDouble;
