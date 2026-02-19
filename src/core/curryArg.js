const {zero, one} = require("../variable/defaultValue");

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
    let placholderCounter = zero;

    if (RefNoDefaultArgs > args.length - argumentUndefinedCounter(args)) {

        for (let kk=zero; kk<RefNoDefaultArgs;) {

            if (_has(args, kk)) {


                if (args[kk] === __) {

                    placholderCounter += one;

                }
                if (typeof args[kk] === "undefined") {

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

        if (NoDefaultArgs-(argSub.length- argumentUndefinedCounter(argSub, false)) > args.length - argumentUndefinedCounter(argSub)) {

            return fnCall;

        }

        const rawArgument = [];
        let holderCounter = zero;

        for (const arg in args) {

            if (_has(args, arg)) {

                if (args[arg] === __) {

                    rawArgument.push(argSub[holderCounter]);
                    holderCounter+=one;

                } else if (typeof args[arg] === "function") {

                    if (rawArgument.length === zero) {

                        rawArgument.push(args[arg]);

                    } else {

                        const getApply = args[arg].apply(this, argSub);

                        rawArgument.push(getApply);
                        if (typeof getApply === "function") {

                            if (getApply.name === fnCall.name && funcReturnType === false) {

                                funcReturnType = true;

                            }

                        }

                    }


                } else if (typeof args[arg] === "undefined") {

                    if (typeof argSub[holderCounter] !== "undefined") {

                        rawArgument.push(argSub[holderCounter]);
                        holderCounter+=one;

                    }

                } else {

                    rawArgument.push(args[arg]);

                }

            }

        }

        for (const arg in argSub) {

            if (_has(argSub, arg) && _has(argSub, holderCounter)) {

                if (argSub[holderCounter] === __) {

                    funcReturnType = true;

                }
                rawArgument.push(argSub[holderCounter]);
                holderCounter+=one;

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
 * @param {boolean=} isPlaceHolder Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * argumentUndefinedCounter([])
 * => 0
 */
function argumentUndefinedCounter (args, isPlaceHolder) {

    let counter = zero;
    const isAllowPlachoder = isPlaceHolder || true;

    for (const arg in args) {

        if (_has(args, arg)) {

            const value = args[arg];

            if (typeof value === "undefined") {

                counter += one;

            } else {

                if (value === __ && isAllowPlachoder) {

                    counter += one;

                }

            }

        }

    }

    return counter;

}

module.exports = curryArg;
