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

    return parseFloat(dataTypeFormat(/(\d)/g, 0, value===null
        ?0
        :value));

}
export default toInteger;
