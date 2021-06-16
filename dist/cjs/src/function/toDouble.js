const dataTypeFormat = require('../core/dataTypeFormat');


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

    return parseFloat(dataTypeFormat(/(\d\.)/g, 0.00, value===null
        ?0
        :value));

}
module.exports=toDouble;;

