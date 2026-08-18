const getValue = require('../function/getValue');
const first = require('../function/first');
const limit = require('../function/limit');
const toArray = require('../function/toArray');
const {zero, one, two} = require("../variable/defaultValue");
const baseReduce = require("./baseReduce");
const curryArg = require("./curryArg");
const flatten = require("../function/flatten");
const arrayRepeat = require("../function/arrayRepeat");


/**
 * To map the value of json or array
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} option Callback function
 * @returns {number} Return map either JSON or Array
 * @example
 *
 * baseMap([1,2],function(value) { return value+2 } )
 *=> [3, 4]
 */
function baseOperation (option) {

    // eslint-disable-next-line prefer-destructuring
    const arg = option.arg;
    // eslint-disable-next-line prefer-destructuring
    const operation = option.operation;

    return curryArg(function (...rawArg) {

        const firstNum = first(rawArg);

        return baseReduce(function (total, value) {

            if (operation === "add") {

                total += Number(value);

            }

            if (operation === "multiply") {

                total *= Number(value);

            }

            if (operation === "subtract") {

                total -= Number(value);

            }

            if (operation === "divide") {

                total /= Number(value);

            }


            return total;

        }, firstNum, toArray(getValue(limit(rawArg, one))));


    }, flatten([
        arg,
        // eslint-disable-next-line no-undefined
        arrayRepeat(undefined, arg.length <= two
            ? two - arg.length
            : zero)
    ]), two);


}


module.exports=baseOperation;
