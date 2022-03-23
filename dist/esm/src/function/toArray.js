import getTypeof from './getTypeof';


/**
 * To Array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value The second number in an addition.
 * @returns {any[]} Returns the total.
 * @example
 *
 * toArray(1)
 *=>[1]
 */
function toArray (value) {

    let return_val = value;

    if (getTypeof(return_val)!=="array") {

        return_val = [value];

    }

    return return_val;

}
export default toArray;

