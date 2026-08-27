import getValue from '../function/getValue.mjs';

import first from '../function/first.mjs';

import limit from '../function/limit.mjs';

import toArray from '../function/toArray.mjs';

import {zero, one, two} from '../variable/defaultValue.mjs';

import baseReduce from './baseReduce.mjs';

import curryArg from './curryArg.mjs';

import flatten from '../function/flatten.mjs';

import arrayRepeat from '../function/arrayRepeat.mjs';

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

    const curryArgFunction = curryArg(function (...rawArg) {

        const firstNum = first(rawArg);

        const conReduce = baseReduce(function (total, value) {

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

        return conReduce;

    }, flatten([
        arg,
        // eslint-disable-next-line no-undefined
        arrayRepeat(undefined, arg.length <= two
            ? two - arg.length
            : zero)
    ]), two);

    return curryArgFunction;

}

export default baseOperation;

