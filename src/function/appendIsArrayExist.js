const each = require('./each');

const indexOfNotExist = require('./indexOfNotExist');

const getTypeof = require('./getTypeof');

/**
 * Append If Array does not Exist
 *
 * @since 1.0.1
 * @category Array
 * @param {any} arrayObject Data is Array
 * @param {any=} value Value for array lookup
 * @returns {any[]} Return array.
 * @example
 *
 * appendIsArrayExist([312], [32])
 * // => [312, 32]
 */
function appendIsArrayExist (arrayObject, value) {

    const ary_type=getTypeof(arrayObject);
    const ary_type1=getTypeof(value);

    if (ary_type === "array" && ary_type1 === "array") {

        each(value, function (val) {

            if (indexOfNotExist(arrayObject, val)) {

                arrayObject.push(val);

            }

        });

        return arrayObject;

    }

    return [];

}
module.exports=appendIsArrayExist;
