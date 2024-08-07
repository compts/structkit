import has from './has.js';

import each from './each.js';

import getData from './getData.js';

import isEmpty from './isEmpty.js';

/**
 * Convert Json To Array base on search value you provide
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Json
 * @param {string} value Search key or index.
 * @returns {boolean} Returns Array
 * @example
 *
 * jsonToArray({"a":{"a":2},"b":{"a":3}},"a")
 * => [2, 3]
 */
function jsonToArray (objectValue, value) {

    const arry=[];

    each(objectValue, function (_key, _value) {

        if (has(value)) {

            const valueData = getData(_value, value);

            if (isEmpty(valueData) === false) {

                arry.push(valueData);

            }

        } else {

            arry.push(_value);

        }

    });

    return arry;

}
export default jsonToArray;

