export default strSubs;
/**
 * String Substr
 *
 * @since 1.4.5
 * @category String
 * @param {string} value String data
 * @param {number} minValue minimum value
 * @param {number=} maxValue maximum value
 * @returns {string} Returns camel sting data
 * @example
 *
 * strSubs('The fish is goad   with Goat-1ss')
 *=> 'the fish is goad   with goat-1ss
 */
declare function strSubs(value: string, minValue: number, maxValue?: number | undefined): string;
