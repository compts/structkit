const has = require('./has');

const each = require('./each');

const getJSONVariable = require('./getJSONVariable');

const getTypeof = require('./getTypeof');

const append = require('./append');


/**
 * Filter the data in loop
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The data either json or array
 * @param {Function=} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * filter([1,2],(key,value)=>{
 *
 * })
 *
 */
function filter (objectValue, func) {

    let jsn_var=getJSONVariable(objectValue);
    const jsn_type=getTypeof(objectValue);

    each(objectValue, function (key, value) {

        if (has(func)) {

            if (func(key, value)===true) {

                if ((/(json|array)/g).test(jsn_type)) {

                    append(jsn_var, value, key);

                } else {

                    jsn_var=value;

                }

            }

        }

    });

    return jsn_var;

}
module.exports=filter;

