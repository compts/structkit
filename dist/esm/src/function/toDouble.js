import dataTypeFormat from '../core/dataTypeFormat';

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
function toDouble (value) {

    const zero = 0.00;

    return parseFloat(dataTypeFormat(/(\d[.]{0,})/g, zero, value===null
        ?zero
        :value));

}
export default toDouble;

