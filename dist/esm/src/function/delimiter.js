import has from './has';

import count from './count';

import each from './each';

/**
 * Delimiter
 *
 * @since 1.3.1
 * @category Seq
 * @param {any} objectValue Array
 * @param {number=} min Delimiter in minumum of 2
 * @param {number=} max Delimiter in minumum base on array count
 * @returns {any[]} Returns the total.
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

