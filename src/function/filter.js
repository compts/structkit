const has = require('./has');

const each = require('./each');

const getEmptyVariable = require('./getEmptyVariable');

const getTypeof = require('./getTypeof');

const append = require('./append');


/**
 * Filter the data in loop
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue The data either json or array
 * @param {Function=} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * filter([1,2,3,34],function(value, key){ return key%2===0 })
 *
 * => [2, 34]
 */
function filter (objectValue, func) {

    let jsn_var=getEmptyVariable(objectValue);
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

