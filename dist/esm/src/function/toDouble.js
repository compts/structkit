import dataNumberFormat from '../core/dataTypeFormat';

/**
 * To extract number in string and convert to double
 *
 * @since 1.0.1
 * @category Number
 * @param {any} value Value you to convert in double
 * @returns {number} Return in double.
 * @example
 *
 * toDouble(1)
 *=>1.00
 */
function toDouble (value) {

    const zero = 0.00;

    return parseFloat(dataNumberFormat(/(\d[.]{0,})/g, zero, value===null
        ?zero
        :value));

}
export default toDouble;

