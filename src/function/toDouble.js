const dataTypeFormat = require('../core/dataTypeFormat');


/**
 * To Double
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value Value you to convert in double
 * @returns {any} Return in double.
 * @example
 *
 * toDouble(1)
 *=>1.00
 */
function toDouble (value) {

    const zero = 0.00;

    return parseFloat(dataTypeFormat(/(\d[.]{0,})/g, zero, value===null
        ?zero
        :value));

}
module.exports=toDouble;

