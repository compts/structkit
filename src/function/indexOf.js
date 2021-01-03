import getTypeof from './getTypeof';
import count from './count';

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number|object|string} value The first number in an addition.
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function indexOf (objectValue, value) {

    const indexOfDefaultValue=-1;
    const incrementDefaultValue=1;

    if (getTypeof(objectValue)==="array") {

        for (let inc=0; inc<count(objectValue);) {

            if (objectValue[inc]===value) {

                return inc;

            }

            inc+=incrementDefaultValue;

        }

        return indexOfDefaultValue;

    }

    return indexOfDefaultValue;

}
export default indexOf;
