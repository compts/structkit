const has = require('./has');
const curryArg = require("../core/curryArg");
const {one, two} = require("../variable/defaultValue");
const getTypeof = require('./getTypeof');
const indexOfExist = require("./indexOfExist");


/**
 * Check if data was executed once
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} func Either JSON or array
 * @returns {any} Returns filled value from its index
 * @example
 *
 * once('as','as2',{'as':1})
 * // => 1
 */
function once (func) {

    let reserve = null;
    let toProceed = false;

    return curryArg(function (rawFunc) {

        return function (...arg) {


            if (getTypeof(rawFunc) !== "function") {

                return rawFunc;

            }


            if (getTypeof(arg[arg.length-one]) === "json") {

                const argValue = arg[arg.length-one];

                if (has(argValue, 'continue') && has(argValue, 'pass_value') && has(argValue, 'action')) {

                    if (indexOfExist(argValue.action, [
                        "filter",
                        "lookup_execution"
                    ])) {

                        reserve = rawFunc.apply(this, arg);
                        if (argValue.pass_value) {

                            argValue.continue =false;
                            rawFunc.__called__ = true;

                            return reserve;

                        }

                    } else {

                        toProceed = true;
                        argValue.continue =false;

                    }

                }


            } else {

                toProceed = true;

            }
            if (has(rawFunc, '__called__') === false && toProceed) {

                rawFunc.__called__ = true;

                reserve = rawFunc.apply(this, arg);

            }

            return reserve;

        };

    }, [func], two);


}
module.exports=once;

