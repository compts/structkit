import has from './has';

import each from './each';

import getData from './getData';

import isEmpty from './isEmpty';

/**
 * Json To Array
 *
 * @since 1.0.1
 * @category Seq
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

            if (isEmpty(valueData) ===false) {

                arry.push(valueData);

            }

        } else {

            arry.push(_value);

        }

    });

    return arry;

}
export default jsonToArray;

