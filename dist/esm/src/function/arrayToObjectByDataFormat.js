const map = require('./map');

const getData = require('./getData');


/**
 * Array To Object By DataFormat
 *
 * @since 1.3.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {any} valueFormat The second number in an addition.
 * @returns {any} Returns the total.
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
module.exports=arrayToObjectByDataFormat;
