import getTypeof from './getTypeof';
import has from './has';
import each from './each';


/**
 * Insert Value
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The first number in an addition.
 * @param {any} value The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * insert({'as':1}, 'as','as2')
 * // => 1
 */
function insert (objectValue, value) {

    if (has(objectValue)) {

        const jsn_type=getTypeof(value);

        if (jsn_type==="json") {

            each(value, function (key, _value) {

                objectValue[key]=_value;

            });

        } else {

            objectValue.push(value);

        }

    }

}
export {insert};

