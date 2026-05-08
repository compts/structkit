import getTypeof from './getTypeof.mjs';

import each from './each.mjs';

import indexOfNotExist from './indexOfNotExist.mjs';

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

        each(value, function (val) {

            if (indexOfNotExist(val, uniqArrData)) {

                uniqArrData.push(val);

            }

        });

        return uniqArrData;

    }

    return [];

}
export default unique;

