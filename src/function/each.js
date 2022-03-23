const getTypeof = require('./getTypeof');

const has = require('./has');


/**
 * Each
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {any} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * each([1,2],(key,value)=>{
 *
 * })
 *
 */
function each (objectValue, func) {

    let re_loop=[];
    const typeofs=getTypeof(objectValue);

    if (typeofs==="json"||typeofs==="array"||typeofs==="object") {

        for (const ins in objectValue) {

            if (has(objectValue, ins)) {

                let bool_func = true;

                if (getTypeof(objectValue[ins])==="function") {

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

