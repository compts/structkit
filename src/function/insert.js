const getTypeof = require('./getTypeof');

const has = require('./has');

const each = require('./each');


/**
 * Insert Value
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The first number in an addition.
 * @param {any} value The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 * var ss = {"A":1}
 * insert(ss,{'as':1})
 * // => {A: 1, as: 1}
 */
function insert (objectValue, value) {

    if (has(objectValue)) {

        const jsn_type=getTypeof(value);

        if (jsn_type==="json") {

            each(value, function (key, _value) {

                objectValue[key]=_value;

            });

        }

        if (jsn_type==="array") {

            objectValue.push(value);

        }

    }

}
module.exports=insert;

