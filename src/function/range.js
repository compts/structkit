const has = require('./has');

const getTypeof = require('./getTypeof');

const {zero, one, ten} = require("../variable/defaultValue");

/**
 * Generate array of data from specific limit or where the index to start
 *
 * @since 1.0.1
 * @category Array
 * @param {number} maxValue Max value you to generate in array, default value 1
 * @param {number=} minValue Min value you to generate in array , default value 10
 * @param {string|number=} step  Specify the logic of increment or decrement
 * @returns {any[]} Return in array.
 * @example
 *
 * range(10)
 *=>[1,2,3,4,5,6,7,8,9,10]
 */
function range (maxValue, minValue, step) {

    const incrementValue=has(step)
        ?Number(step)
        :one;
    const minValueRef=has(minValue)
        ?Number(minValue)
        :one;
    const maxValueRef=has(maxValue)
        ?Number(maxValue)
        :ten;
    const output=[];

    for (let inc=minValueRef; inc <= maxValueRef;) {

        if (getTypeof(incrementValue) === "string") {

            output.push(inc);

            const render = new Function('inc', "return "+inc+incrementValue);

            inc = render.call(inc);

        }
        if (getTypeof(incrementValue) === "number") {

            output.push(inc);
            if (incrementValue<zero) {

                inc -= incrementValue;

            } else {

                inc += incrementValue;

            }

        }

    }

    return output;

}
module.exports=range;

