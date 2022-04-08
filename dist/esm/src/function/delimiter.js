import has from './has';

import count from './count';

import each from './each';

/**
 * Delimiter
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {number} min The second number in an addition.
 * @param {number} max The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * delimiter([1,2])
 * // => 2
 */
function delimiter (objectValue, min, max) {

    const ran_var=[];
    const defaultValueZero=0;
    const ran_min=has(min)
        ?min
        :defaultValueZero;
    const ran_max=has(max)
        ?max
        :count(objectValue);

    each(objectValue, function (key, value) {

        if (ran_min <= parseInt(key) && ran_max >= parseInt(key)) {

            ran_var.push(value);

        }

    });

    return ran_var;

}
export default delimiter;

