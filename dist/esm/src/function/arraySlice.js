import has from './has.js';

import count from './count.js';

import each from './each.js';

/**
 * To get value of array given start and end(optional) of the array
 * This is a rename of delimiter
 *
 * @since 1.3.1
 * @category Array
 * @param {any} objectValue Array
 * @param {number=} min Minumum of 2
 * @param {number=} max Maximum base on array count
 * @returns {any[]} Returns the total.
 * @example
 *
 * arraySlice([1,2],1)
 * // => [2]
 *
 * arraySlice([1,2,3,4],2,4)
 * // => [3, 4]
 */
function arraySlice (objectValue, min, max) {

    const ran_var=[];
    const defaultValueZero=0;
    const defaultValueNegativeOne=-1;
    let ran_min=has(min)
        ?min
        :defaultValueZero;
    let ran_max=has(max)
        ?max
        :count(objectValue);

    if (has(min)) {

        if (defaultValueZero > min) {

            ran_min = defaultValueZero;
            ran_max = count(objectValue) + (defaultValueNegativeOne+ min);

        }

    }

    if (has(max)) {

        if (defaultValueZero > max) {

            const raw_ran_min = defaultValueZero > min
                ?count(objectValue) + (defaultValueNegativeOne+ min)
                :min;
            const raw_ran_max =count(objectValue) + max;

            if (raw_ran_min < raw_ran_max) {

                ran_min = raw_ran_min;
                ran_max = raw_ran_max;

            } else {

                ran_min = raw_ran_min;
                ran_max = raw_ran_min;

            }

        }

    }

    each(objectValue, function (key, value) {

        if (ran_min <= parseInt(key) && ran_max >= parseInt(key)) {

            ran_var.push(value);

        }

    });

    return ran_var;

}
export default arraySlice;

