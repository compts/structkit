import baseReduce from './baseReduce.js';

import toArray from '../function/toArray.js';

import {getTypeofInternal} from './getTypeOf.js';

import {zero, one} from './defaultValue.js';

/**
 * Counting the true in list of array
 *
 * @since 1.4.8
 * @category Any
 * @param {any[]} objectValue The data is array
 * @returns {any} Returns the total.
 * @example
 *
 * baseCountValidList([true,true])
 * // => 2
 */
function baseCountValidList (objectValue) {

    return baseReduce(zero, objectValue, function (total, value) {

        const values = toArray(value);

        total +=baseReduce(zero, values, function (subtotal, subvalue) {

            if (subvalue && getTypeofInternal(subvalue) === "boolean") {

                return subtotal +one;

            }

            return subtotal;

        });

        return total;

    });

}
export default baseCountValidList;

