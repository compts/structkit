const getTypeof = require('./getTypeof');

const has = require('./has');

const each = require('./each');

/**
 * Insert value in Json object or array
 *
 * @since 1.0.1
 * @category Object
 * @param {any} objectValue Either Json or array
 * @param {any} value Data you want to insert
 * @returns {null} Returns null
 * @example
 * var ss = {"A":1}
 * insert(ss,{'as':1})
 * // => {A: 1, as: 1}
 */
function insert (objectValue, value) {

    if (has(objectValue)) {

        const jsn_type=getTypeof(value);

        if (jsn_type === "json") {

            each(value, function (_value, key) {

                objectValue[key]=_value;

            });

        }

        if (jsn_type === "array") {

            objectValue.push(value);

        }

    }

}
module.exports=insert;
