import dataTypeFormat from '../core/dataTypeFormat';

/**
 * To Integer
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value Value you to convert in integer
 * @returns {any[]} Return in integer.
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
export default toInteger;

