import curryArg from '../core/curryArg.mjs';

import {one} from '../variable/defaultValue.mjs';

import limit from './limit.mjs';

import first from './first.mjs';

import baseReduce from '../core/baseReduce.mjs';

import arrayRepeat from './arrayRepeat.mjs';

import {getTypeofInternal} from '../core/getTypeOf.mjs';

/**
 * Perform left to right function composition. first arguemnt will be default value
 *
 * @since 1.4.86
 * @category Function
 * @param {...any?} arg Arguments in function
 * @returns {any} Returns any value.
 * @example
 *
 * pipe(Math.pow,add(1))(11,2)
 * // => 122
 */
function pipe (...arg) {

    const pipeConst = first(arg);
    const varLimit = limit(arg, one);
    const that = this;

    return curryArg(function (...rawValue) {

        return baseReduce(function (total, value) {

            if (getTypeofInternal(value) === "function") {

                total = value.call(that, total);

            }

            return total;

        }, pipeConst.apply(that, rawValue), varLimit);

    // eslint-disable-next-line padded-blocks
    // eslint-disable-next-line no-undefined
    }, arrayRepeat(undefined, pipeConst.length), pipeConst.length);

}
export default pipe;

