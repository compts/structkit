import has from './has';
import each from './each';

/**
 * Json To Array
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} objectValue The first number in an addition.
 * @param {string} value The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * jsonToArray({})
 * // => true
 */
function jsonToArray (objectValue, value) {

    const arry=[];

    each(objectValue, function (_key, _value) {

        if (has(value)) {

            if (has(_value, value)) {

                arry.push(_value[value]);

            }

        } else {

            arry.push(_value);

        }

    });

    return arry;

}
export default jsonToArray;
