import has from './has.js';

import each from './each.js';

import getData from './getData.js';

import isEmpty from './isEmpty.js';

/**
 * Convert Json To Array base on search value you provide,the search value  will only look for value in json.
 *
 * @since 1.0.1
 * @category Collection
 * @param {string} value Search key or index.
 * @param {any} objectValue Json
 * @returns {any} Returns Array
 * @example
 *
 * jsonToArray("a",{"a":{"a":2},"b":{"a":3}})
 * => [2, 3]
 */
function jsonToArray (value, objectValue) {

    const arry=[];

    each(objectValue, function (_value) {

        if (has(value)) {

            const valueData = getData(value, _value);

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

