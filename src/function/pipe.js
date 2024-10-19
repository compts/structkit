const curryArg = require("../core/curryArg");
const {one} = require("../core/defaultValue");
const limit = require('./limit');
const first = require("./first");
const baseReduce = require("../core/baseReduce");
const arrayRepeat = require("./arrayRepeat");
const {getTypeofInternal} = require('../core/getTypeOf');

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
module.exports=pipe;

