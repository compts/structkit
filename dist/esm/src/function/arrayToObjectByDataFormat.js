import map from './map.js';

import getData from './getData.js';

/**
 * Array To Object By DataFormat
 *
 * @since 1.3.1
 * @category Array
 * @param {any[]} objectValue Json in array format
 * @param {string} valueFormat Key look up format
 * @returns {any[]} Return array or object.
 * @example
 *
 * arrayToObjectByDataFormat([{"Asd":1}],"Asd")
 *=>[1]
 */
function arrayToObjectByDataFormat (objectValue, valueFormat) {

    return map(objectValue, function (value) {

        return getData(value, valueFormat);

    });

}
export default arrayToObjectByDataFormat;

