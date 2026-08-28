const curryArg = require("../core/curryArg");
const arrayRepeat = require('./arrayRepeat');
const count = require('./count');
const {getTypeofInternal} = require('../core/getTypeOf');


/**
 * Create your own curry for your onw function
 *
 * @since 1.4.9
 * @category Function
 * @param {any=} fun Callback function
 * @param {number=} num Number of default arguments
 * @returns {any} Returns expected value from callback
 * @example
 *
 * asd = curry((test) =>{})
 * // => (test) =>{}
 */
function curry (fun, num) {


    let refNum = num || fun.length;

    if (getTypeofInternal(fun) === "function") {

        if (getTypeofInternal(fun().__no_args__) === "number" && getTypeofInternal(num) === "undefined") {

            refNum = fun().__no_args__;

        }

    }

    // eslint-disable-next-line no-undefined
    const argDummy = arrayRepeat(undefined, refNum);

    return curryArg(fun, argDummy, count(argDummy));

}
module.exports=curry;

