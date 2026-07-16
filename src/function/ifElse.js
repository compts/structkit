const curryArg = require("../core/curryArg");
const {getTypeofInternal} = require('../core/getTypeOf');
const {one, zero, two, three} = require("../variable/defaultValue");
const toArray = require('./toArray');
const arraySlice = require('./arraySlice');
const __ = require('../core/__');
const reduce = require('./reduce');

/**
 * If else condition logic, using curry callback, you now use this statement is function or objectt will if condition are met
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} cond Condition validation
 * @param {any} ifFunc if valid this function or arg will return
 * @param {any=} elseFunc else this function or arg will return
 * @returns {any} Returns the either ifFunc or elseFunc.
 * @example
 *
 * ifElse(__,(params,ss) => ss,(params,ss,s2) => {return s2)(true,1,2)
 * // => 1
 */
function ifElse (cond, ifFunc, elseFunc) {

    let argumentCounter = 0;

    const reduceFunc = reduce(function (total, value) {

        if (value === __) {

            total +=one;

        }

        if (getTypeofInternal(value) === "function") {

            if (total < value.length) {

                total +=value.length - total;

            }

        }

        return total;

    }, zero, [
        cond,
        ifFunc,
        elseFunc
    ]);

    argumentCounter = reduceFunc;

    return curryArg(function (...rawArgs) {

        let varCond = false;
        const arrayValue = toArray(arraySlice(rawArgs, three));
        const rawCond = rawArgs[zero];
        const rawIfFunc = rawArgs[one];
        const rawElseFunc = rawArgs[two];

        if (getTypeofInternal(rawCond) === "function" && arrayValue.length>zero) {

            varCond = rawCond(...arrayValue);

        } else {

            varCond = rawCond;

        }
        if (varCond) {

            if (getTypeofInternal(rawIfFunc) === "function" && arrayValue.length>zero) {

                return rawIfFunc(...arrayValue);

            }

            return rawIfFunc;

        }

        if (getTypeofInternal(rawElseFunc) === "function" && arrayValue.length>zero) {

            return rawElseFunc(...arrayValue);

        }

        return rawElseFunc;

    }, [
        cond,
        ifFunc,
        elseFunc
    ], three+argumentCounter);

}
module.exports=ifElse;
