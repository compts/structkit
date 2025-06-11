const curryArgReview = require("./curryArgReview");
const {zero, one} = require("./defaultValue");
const _has = require("./_has");
const __ = require("./__");

/**
 * Create your curry function
 *
 * @since 1.4.8
 * @category Function
 * @param {any} fn Any data you want to check its property
 * @param {any[]} args Any data you want to check its property
 * @param {number=} NoDefaultArgs Any data you want to check its property
 * @returns {any} Get the property of variable
 * @example
 *
 * curryArg(function(){}, [])
 * => array
 */
function curryArg (fn, args, NoDefaultArgs) {


    const RefNoDefaultArgs = NoDefaultArgs || zero;

    if (RefNoDefaultArgs > args.length - argumentUndefinedCounter(args)) {

        for (let kk=0; kk<RefNoDefaultArgs;) {

            if (_has(args, kk)) {

                if (typeof args[kk] === "undefined") {

                    args[kk] = __;

                }

            }
            kk += one;

        }

    }

    const checkValue = curryArgReview(args);

    if (checkValue.place.length > zero) {

        return function (...argSub) {

            const clneCheckValue = [];

            const reviewArgValue = curryArgReview(argSub);

            if (reviewArgValue.place.length > zero) {

                return curryArg(fn, args);

            }
            for (let ii=0; ii<checkValue.argInc;) {

                if (_has(checkValue.argss, ii)) {

                    const argValue = checkValue.argss[ii];

                    if (argValue.type === "place") {

                        if (_has(argSub, argValue.index)) {

                            clneCheckValue.push(argSub[argValue.index]);

                        }

                    } else {

                        clneCheckValue.push(argValue.val);

                    }

                }

                ii += one;

            }

            return fn.apply(this, clneCheckValue);

        };

    }

    return fn.apply(this, args);

}

/**
 * Count undefined in arguments
 *
 * @since 1.4.8
 * @category String
 * @param {any[]} args Any data you want to check its property
 * @param {number=} NoDefaultArgs Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * argumentUndefinedCounter([])
 * => 0
 */
function argumentUndefinedCounter (args) {

    let counter = 0;

    for (const arg in args) {

        if (_has(args, arg)) {

            const value = args[arg];

            if (typeof value === "undefined") {

                counter += one;

            }

        }

    }

    return counter;

}

module.exports=curryArg;
