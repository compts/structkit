export default stringSubs;
/**
 * String Substr
 *
 * @since 1.4.5
 * @category Seq
 * @param {string} value String data
 * @param {number} minValue minimum value
 * @param {number=} maxValue maximum value
 * @returns {string} Returns camel sting data
 * @example
 *
 * stringSubs('The fish is goad   with Goat-1ss')
 *=> 'the fish is goad   with goat-1ss
 */
declare function stringSubs(value: string, minValue: number, maxValue?: number | undefined): string;
