import getTypeof from './getTypeof.js';

import each from './each.js';

import indexOfNotExist from './indexOfNotExist.js';

/**
 * Get only the unique data from array
 *
 * @since 1.4.1
 * @category Array
 * @param {any} value Value you want to convert in array
 * @returns {any[]} Return in array.
 * @example
 *
 * unique([1,2,3,2,3])
 *=>[1,2,3]
 */
function unique (value) {

    if (getTypeof(value) === "array") {

        const uniqArrData = [];

        each(value, function (key, val) {

            if (indexOfNotExist(uniqArrData, val)) {

                uniqArrData.push(val);

            }

        });

        return uniqArrData;

    }

    return [];

}
export default unique;

