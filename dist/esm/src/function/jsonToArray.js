import has from './has';
import each from './each';
import getData from './getData';
import isEmpty from './isEmpty';


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
 * jsonToArray({"a":1,"b":2},"a")
 * => []
 */
function jsonToArray (objectValue, value) {

    const arry=[];

    each(objectValue, function (_key, _value) {

        if (has(value)) {

            const valueData = getData(_value, value);

            if (isEmpty(valueData) ===false) {

                arry.push(valueData);

            }

        } else {

            arry.push(_value);

        }

    });

    return arry;

}
export default jsonToArray;

