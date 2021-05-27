const map = require('./map');

const getData = require('./getData');


/**
 * Array To Object By DataFormat
 *
 * @since 1.3.5
 * @category Seq
 * @param {number|string|object} objectValue The second number in an addition.
 * @param {number|string|object} valueFormat The second number in an addition.
 * @returns {array} Returns the total.
 * @example
 *
 * arrayToObjectByDataFormat(1)
 *=>[1]
 */
function arrayToObjectByDataFormat (objectValue, valueFormat) {


    return map(objectValue, function (value) {

        return getData(value, valueFormat);

    });

}
module.exports=arrayToObjectByDataFormat;;

