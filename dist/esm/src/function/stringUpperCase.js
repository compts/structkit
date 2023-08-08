import toString from './toString';

/**
 * String Upper case case
 *
 * @since 1.4.5
 * @category Seq
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * stringCamelCase('The fish is goad   with Goat-1ss')
 *=> 'THE FISH IS GOAD   WITH GOAT-1SS'
 */
function stringUpperCase (value) {

    return toString(value).toUpperCase();

}
export default stringUpperCase;

