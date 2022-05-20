import getTypeof from './getTypeof';

/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} arrayObject First array
 * @param {any} arrayValue The second array for concat
 * @returns {any} Returns the array.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
function arrayConcat (arrayObject, arrayValue) {

    const return_val=arrayObject;

    if (getTypeof(return_val)==="array") {

        return return_val.concat(arrayValue);

    }

    return [];

}
export default arrayConcat;

