import curryArg from '../core/curryArg.js';

import {one} from '../core/defaultValue.js';

import limit from './limit.js';

import first from './first.js';

import baseReduce from '../core/baseReduce.js';

import arrayRepeat from './arrayRepeat.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

/**
 * Perform left to right function composition. first arguemnt will be default value
 *
 * @since 1.4.86
 * @category Condition
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

        return baseReduce(pipeConst.apply(that, rawValue), varLimit, function (total, value) {

            if (getTypeofInternal(value) === "function") {

                total = value.call(that, total);

            }

            return total;

        });

    // eslint-disable-next-line padded-blocks
    // eslint-disable-next-line no-undefined
    }, arrayRepeat(undefined, pipeConst.length), pipeConst.length);

}
export default pipe;

