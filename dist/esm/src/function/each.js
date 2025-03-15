import {getTypeofInternal} from '../core/getTypeOf.js';

import has from './has.js';

/**
 * GlobalEach
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} config request body
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
 * each([1,2],(key,value,localGlobal)=>{ })
 *
 */
GlobalEach.prototype.isContinue = function (value) {

    this.continue = value;

};

/**
 * Each or for loop function you are familiar with
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Array or json.
 * @param {Function=} func Function to execute the loop with callback key,
 * @returns {any} Array or json
 * @example
 *
 * each([1,2],(key,value,localGlobal)=>{ })
 *
 */
function each (objectValue, func) {

    let re_loop=[];

    const typeofs=getTypeofInternal(objectValue);

    const localGlobal = new GlobalEach();

    if (typeofs === "json"||typeofs === "array"||typeofs === "object"||typeofs === "arguments") {

        for (const ins in objectValue) {

            if (has(objectValue, ins)) {

                if (localGlobal.continue === false) {

                    break;

                }
                let bool_func = true;

                if (getTypeofInternal(objectValue[ins]) === "function") {

                    if ((/\b_/g).test(ins)) {

                        bool_func= false;

                    }

                }
                if (bool_func) {

                    try {

                        if (has(func)) {

                            func(ins, objectValue[ins], localGlobal);

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

        }

        return re_loop;

    }

    return null;

}
export default each;

