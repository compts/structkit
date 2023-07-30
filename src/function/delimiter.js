const has = require('./has');

const count = require('./count');

const each = require('./each');


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
 * delimiter([1,2],1)
 * // => [2]
 *
 * delimiter([1,2,3,4],2,4)
 * // => [2, 3, 4]
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
module.exports=delimiter;

