export default numberFormat;
/**
 * Number format
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The data you want to format
 * @param {string} value1 The start number.
 * @param {string=} value2 The end number.
 * @returns {null} Return format number
 * @example
 *
 * numberFormat(1,1,2)
 *=>1.00
 */
declare function numberFormat(objectValue: any[] | object, value1: string, value2?: string | undefined): null;
