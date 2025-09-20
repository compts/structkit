import {zero, one} from './defaultValue.js';

import _has from './_has.js';

import __ from './__.js';

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
    let placholderCounter = 0;

    if (RefNoDefaultArgs > args.length - argumentUndefinedCounter(args)) {

        for (let kk=0; kk<RefNoDefaultArgs;) {

            if (_has(args, kk)) {

                if (args[kk] === __) {

                    placholderCounter += one;

                }
                if (typeof args[kk] === "undefined") {

                    // eslint-disable-next-line no-undefined
                    args[kk] = undefined;
                    placholderCounter += one;

                }

            }
            kk += one;

        }

    } else {

        for (const arg in args) {

            if (_has(args, arg)) {

                if (args[arg] === __) {

                    placholderCounter +=one;

                }

            }

        }

    }

    if (placholderCounter === zero) {

        return fn.apply(this, args);

    }

    return function fnCall (...argSub) {

        let funcReturnType = false;

        if (NoDefaultArgs-(argSub.length- argumentUndefinedCounter(argSub)) > args.length - argumentUndefinedCounter(argSub)) {

            return fnCall;

        }

        const rawArgument = [];
        let cc1 = zero;
        const getFunIndex = {};

        for (const arg in args) {

            if (_has(args, arg)) {

                if (args[arg] === __) {

                    rawArgument.push(argSub[cc1]);
                    cc1+=one;

                } else if (typeof args[arg] === "function") {

                    if (args[arg].name === fnCall.name) {

                        rawArgument.push(argSub[cc1]);
                        cc1+=one;

                    }

                    getFunIndex[arg] = rawArgument.length-one;

                } else if (typeof args[arg] === "undefined") {

                    rawArgument.push(argSub[cc1]);
                    cc1+=one;

                } else {

                    rawArgument.push(args[arg]);

                }

            }

        }

        for (const arg in args) {

            if (_has(args, arg)) {

                if (typeof args[arg] === "function") {

                    const getApply = args[arg].apply(this, rawArgument);

                    if (funcReturnType === false) {

                        funcReturnType = ["function"].indexOf(typeof getApply)>-one;

                    }
                    rawArgument[getFunIndex[arg]]= getApply;

                }

            }

        }
        if (funcReturnType) {

            return fnCall;

        }

        return fn.apply(this, rawArgument);

    };

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

export default curryArg;

