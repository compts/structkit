import curryArgReview from './curryArgReview';

import {zero, one} from './defaultValue';

import _has from './_has';

/**
 * Get type of the variable
 *
 * @since 1.4.8
 * @category String
 * @param {any} fn Any data you want to check its property
 * @param {any[]} args Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * curryArgNone(function(){}, [])
 * => array
 */
function curryArg (fn, args) {

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

export default curryArg;

