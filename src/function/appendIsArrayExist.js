import each from './each';
import indexOf from './indexOf';
import getTypeof from './getTypeof';

/**
 * Append Is Array Exist
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|Object|string} arrayObject The second number in an addition.
 * @param {number|Object|string} value The second number in an addition.
 * @returns {Array} Returns the total.
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
export default appendIsArrayExist;
