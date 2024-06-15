import {zero, one} from '../core/defaultValue';

import getTypeof from './getTypeof';

/**
 * To Increment value
 *
 * @since 1.4.8
 * @category Array
 * @param {any} value Value you want to convert in array
 * @param {any} default_value Value you want to convert in array
 * @returns {number} Return in number.
 * @example
 *
 * inc(1)
 *=>2
 */
function inc (value, default_value) {

    let return_val = value;
    const inc_n = getTypeof(default_value) === "number"
        ? one
        : default_value;

    if (getTypeof(return_val) === "number") {

        return_val += inc_n;

        return return_val;

    }

    return zero;

}
export default inc;

