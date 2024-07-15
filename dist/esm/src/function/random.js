import has from './has.js';

import count from './count.js';

import each from './each.js';

/**
 * Random value from array list
 *
 * @since 1.0.1
 * @category Seq
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

    const ran_var=[];
    const emptyDefaultValue=0;
    const ran_min=has(minValue)
        ?minValue
        :emptyDefaultValue;
    const ran_max=has(maxValue)
        ?maxValue+ran_min
        :count(valueArray);
    const math_random = Math.round(Math.random()*ran_max);

    each(valueArray, function (key, value) {

        if (math_random === parseInt(key)) {

            ran_var.push(value);

        }

    });

    return ran_var;

}
export default random;

