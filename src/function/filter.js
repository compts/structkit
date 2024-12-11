const has = require('./has');

const each = require('./each');

const empty = require('./empty');

const getTypeof = require('./getTypeof');

const append = require('./append');

/**
 * Filter the data in loop
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue The data either json or array
 * @param {Function=} func The second number in an addition.
 * @returns {any} Returns data either json or array.
 * @example
 *
 * filter([1,2,3,34],function(value, key){ return key%2 === 0 })
 *
 * => [2, 34]
 */
function filter (objectValue, func) {

    const jsn_var=empty(objectValue);
    const jsn_type=getTypeof(objectValue);

    if (!(/(json|array)/g).test(jsn_type)) {

        return [];

    }
    each(objectValue, function (key, value) {

        if (has(func)) {


            if (func(key, value)) {

                append(jsn_var, value, key);

            }

        }

    });

    return jsn_var;

}
module.exports=filter;

