export default stringUnEscape;
/**
 * String Unescape
 *
 * @since 1.3.1
 * @category Seq
 * @param {number} value The second number in an addition.
 * @param {string=} type The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * stringUnEscape('yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss')
 *=>"yahii & adad ^ss"
 */
declare function stringUnEscape(value: number, type?: string | undefined): string;
