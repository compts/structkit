import getTypeof from './getTypeof.js';

import has from './has.js';

import each from './each.js';

/**
 * Insert value in Json object or array
 *
 * @since 1.0.1
 * @category Object
 * @param {any} objectValue Either Json or array
 * @param {any} value Data you want to insert
 * @returns {null} Returns null
 * @example
 * var ss = {"A":1}
 * insert(ss,{'as':1})
 * // => {A: 1, as: 1}
 */
function insert (objectValue, value) {

    if (has(objectValue)) {

        const jsn_type=getTypeof(value);

        if (jsn_type === "json") {

            each(value, function (key, _value) {

                objectValue[key]=_value;

            });

        }

        if (jsn_type === "array") {

            objectValue.push(value);

        }

    }

}
export default insert;

