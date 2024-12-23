const {getTypeofInternal} = require('../core/getTypeOf');

const has = require('./has');

/**
 * Each or for loop function you are familiar with
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Array or json.
 * @param {Function=} func Function to execute the loop with callback key,value
 * @returns {any} Array or json
 * @example
 *
 * each([1,2],(key,value)=>{ })
 *
 */
function each (objectValue, func) {

    let re_loop=[];
    const typeofs=getTypeofInternal(objectValue);

    if (typeofs === "json"||typeofs === "array"||typeofs === "object"||typeofs === "arguments") {

        for (const ins in objectValue) {

            if (has(objectValue, ins)) {

                let bool_func = true;

                if (getTypeofInternal(objectValue[ins]) === "function") {

                    if ((/\b_/g).test(ins)) {

                        bool_func= false;

                    }

                }

                if (bool_func) {

                    try {

                        if (has(func)) {

                            func(ins, objectValue[ins]);

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
module.exports=each;

