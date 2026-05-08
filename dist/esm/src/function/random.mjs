import has from './has.mjs';

import count from './count.mjs';

import toArray from './toArray.mjs';

import {zero} from '../variable/defaultValue.mjs';

/**
 * To create single random value from array
 *
 * @since 1.0.1
 * @category Array
 * @param {any} valueArray Array
 * @param {number} minValue Minimum value base on index
 * @param {number} maxValue  Max value base on index
 * @returns {string|number} Return string or number in array
 * @example
 *
 * random([10,20,30],0,3 )
 *=>'[20]'
 */
function random (valueArray, minValue, maxValue) {

    const ran_min=has(minValue)
        ?minValue
        :zero;
    const ran_max=has(maxValue)
        ?maxValue+ran_min
        :count(valueArray);
    const math_random = Math.round(Math.random()*ran_max);

    if (math_random< count(valueArray) && math_random >=zero) {

        return toArray(valueArray[math_random]);

    }

    return toArray(valueArray[math_random % count(valueArray)]);

}
export default random;

