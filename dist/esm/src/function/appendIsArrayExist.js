const each = require('./each');

const indexOf = require('./indexOf');

const getTypeof = require('./getTypeof');


/**
 * Append If Array not Exist
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} arrayObject The second number in an addition.
 * @param {any} value The second number in an addition.
 * @returns {any[]} Returns the total.
 * @example
 *
 * appendIsArrayExist([1], 2)
 * // => [1,2]
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
