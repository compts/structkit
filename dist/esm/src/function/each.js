import {getTypeofInternal} from '../core/getTypeOf.js';

import indexOfExist from './indexOfExist.js';

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

    if (indexOfExist([
        "json",
        "array",
        "object",
        "arguments"
    ], typeofs)) {

        for (const ins in objectValue) {

            if (has(objectValue, ins)) {

                if (localGlobal.continue === false) {

                    break;

                }

                callbackEach(ins, objectValue, localGlobal, re_loop, func);

            }

        }

        return re_loop;

    }

    if (indexOfExist([
        "set",
        "map"
    ], typeofs)) {

        for (const ins of objectValue) {

            if (has(objectValue, ins)) {

                if (localGlobal.continue === false) {

                    break;

                }

                callbackEach(ins, objectValue, localGlobal, re_loop, func);

            }

        }

        return re_loop;

    }

    return null;

}

/**
 * Create a callback function for each that will be used in the loop
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} ins Array or json.
 * @param {any} objectValue Index of the objectValue.
 * @param {any} localGlobal Global variable to control the loop.
 * @param {any} re_loop Re loop array or json.
 * @param {Function=} func Function to execute the loop with callback value,key (value,key) =>{}.
 * @returns {any} Array or json
 * @example
 *
 * each([1,2],(value,key,localGlobal)=>{ })
 *
 */
function callbackEach (ins, objectValue, localGlobal, re_loop, func) {

    let bool_func = true;

    if (getTypeofInternal(objectValue[ins]) === "function") {

        if ((/\b_/g).test(ins)) {

            bool_func= false;

        }

    }
    if (bool_func) {

        try {

            if (has(func)) {

                func(objectValue[ins], ins, localGlobal);

            } else {

                re_loop[ins]=objectValue[ins];

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

    this.continue = true;

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

