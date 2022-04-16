const each = require('./each');

const indexOf = require('./indexOf');

const getTypeof = require('./getTypeof');


/**
 * Append If Array not Exist
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} arrayObject Array
 * @param {any} value Value for array lookup
 * @returns {any[]} Return array.
 * @example
 *
 * appendIsArrayExist([312], [32])
 * // => [312, 32]
 */
function appendIsArrayExist (arrayObject, value) {

    const ary_type=getTypeof(arrayObject);
    const ary_type1=getTypeof(value);
    const notExist=-1;

    if (ary_type ==="array" && ary_type1 ==="array") {

        each(value, function (key, val) {

            if (indexOf(arrayObject, val)===notExist) {

                arrayObject.push(val);

            }

        });

        return arrayObject;

    }

    return [];

}
module.exports=appendIsArrayExist;

