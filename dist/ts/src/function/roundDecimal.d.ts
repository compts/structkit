export default roundDecimal;
/**
 * Random Decimal
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} value Int or Double value type
 * @param {number=} maxValue limit decimal
 * @returns {number} Returns the total.
 * @example
 *
 * roundDecimal(11.1111111,3 )
 *=>11.11
 */
declare function roundDecimal(value: number, maxValue?: number | undefined): number;
