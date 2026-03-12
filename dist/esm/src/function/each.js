import {getTypeofInternal} from '../core/getTypeOf.js';

import indexOfExist from './indexOfExist.js';

import {zero, one} from '../variable/defaultValue.js';

import convertValue from '../core/convertValue.js';

import has from './has.js';

/**
 * Each or for loop function you are familiar with
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Array or json.
 * @param {Function=} func Function to execute the loop with callback value,key (value,key) =>{}.
 * @returns {any} Array or json
 * @example
 *
 * each([1,2],(value,key,localGlobal)=>{ })
 *
 */
function each (objectValue, func) {

    const re_loop=[];

    const typeofs=getTypeofInternal(objectValue);

    const localGlobal = new GlobalEach();

    if (indexOfExist(typeofs, [
        "json",
        "array",
        "object",
        "arguments"
    ])) {

        for (const ins in objectValue) {

            if (has(objectValue, ins)) {

                if (localGlobal.continue === false) {

                    break;

                }

                callbackEach(convertValue(ins), objectValue, localGlobal, re_loop, func, true);

            }

        }

        return re_loop;

    }

    if (indexOfExist(typeofs, ["set"])) {

        let key = zero;

        for (const ins of objectValue) {

            if (has(objectValue, ins)) {

                if (localGlobal.continue === false) {

                    break;

                }
                callbackEach(key, ins, localGlobal, re_loop, func, false);
                key += one;

            }

        }

        return re_loop;

    }
    if (indexOfExist(typeofs, ["map"])) {

        objectValue.forEach(function (value, key) {

            if (localGlobal.continue) {

                callbackEach(convertValue(key), value, localGlobal, re_loop, func, false);

            }

        });

        return re_loop;

    }

    return null;

}

/**
 * Create a callback function for each that will be used in the loop
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} ins Index.
 * @param {any} objectValue Index of the objectValue.
 * @param {any} localGlobal Global variable to control the loop.
 * @param {any} re_loop Re loop array or json.
 * @param {Function=} func Function to execute the loop with callback value,key (value,key) =>{}.
 * @param {boolean} notSetMap Is set or Map data
 * @returns {any} Array or json
 * @example
 *
 * each([1,2],(value,key,localGlobal)=>{ })
 *
 */
function callbackEach (ins, objectValue, localGlobal, re_loop, func, notSetMap) {

    let bool_func = true;

    if (getTypeofInternal(notSetMap
        ? objectValue[ins]
        : objectValue) === "function") {

        if ((/\b_/g).test(ins)) {

            bool_func= false;

        }

    }
    if (bool_func) {

        try {

            if (has(func)) {

                if (notSetMap) {

                    func(objectValue[ins], ins, localGlobal);

                } else {

                    func(objectValue, ins, localGlobal);

                }

            } else {

                if (notSetMap) {

                    re_loop[ins]=objectValue[ins];

                } else {

                    re_loop[ins]=objectValue;

                }

            }

        } catch (error) {

            console.log(error);

        }

    } else {

        re_loop=null;

    }

}

/**
 * GlobalEach
 * @category Seq
 * @class
 * @name getKit
 */
function GlobalEach () {

    this.external_execution_from = null;
    this.continue = true;
    this.action = null;
    this.pass_value = null;
    this.is_true = true;

}

/**
 * Each or for loop function you are familiar with
 *
 * @since 1.0.1
 * @category Collection
 * @param {boolean} value Array or json.
 * @returns {null} Null return
 * @example
 *
 * each([1,2],(value,key,localGlobal)=>{ })
 *
 */
GlobalEach.prototype.isContinue = function (value) {

    this.continue = value;

};

export default each;

