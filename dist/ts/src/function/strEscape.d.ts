export default strEscape;
/**
 * String Escape
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} type Configuration
 * @returns {string} Returns escape string
 * @example
 *
 * strEscape("yahii & adad ^ss")
 *=> 'yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'
 */
declare function strEscape(value: string, type?: string | undefined): string;
