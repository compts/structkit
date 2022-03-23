const has = require('./has');

const count = require('./count');

const each = require('./each');


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

    let ran_var=[];
    const defaultValueZero=0;
    const ran_min=has(min)
        ?min
        :defaultValueZero;
    const ran_max=has(max)
        ?max+ran_min
        :count(objectValue);
    const math_random=Math.round(Math.random()*ran_max);

    each(objectValue, function (key, value) {

        if (math_random===key) {

            ran_var=value;

        }

    });

    return ran_var;

}
module.exports=delimiter;

