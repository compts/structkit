export default stringEscape;
/**
 * String Escape
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @param {string=} type The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * stringEscape("yahii & adad ^ss")
 *=> 'yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'
 */
declare function stringEscape(value: string, type?: string | undefined): string;
