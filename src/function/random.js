const has = require('./has');

const count = require('./count');

const each = require('./each');


/**
 * Random
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} valueArray The second number in an addition.
 * @param {number} minValue The second number in an addition.
 * @param {number} maxValue The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * random([1,2,3],1,2 )
 *=>'{}'
 */
function random (valueArray, minValue, maxValue) {

    let ran_var=[];
    const emptyDefaultValue=0;
    const ran_min=has(minValue)
        ?minValue
        :emptyDefaultValue;
    const ran_max=has(maxValue)
        ?maxValue+ran_min
        :count(valueArray);
    const math_random = Math.round(Math.random()*ran_max);

    each(valueArray, function (key, value) {

        if (math_random===key) {

            ran_var = value;

        }

    });

    return ran_var;

}
module.exports=random;

