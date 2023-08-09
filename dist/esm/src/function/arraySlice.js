import has from './has';

import count from './count';

import each from './each';

/**
 * To get value of array given start and end(optional) of the array
 * This is a rename of delimiter
 *
 * @since 1.3.1
 * @category Seq
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
 * // => [2, 3, 4]
 */
function arraySlice (objectValue, min, max) {

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
export default arraySlice;

