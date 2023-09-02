export default dataNumberFormat;
/**
 * Logic in convert string or number to valid number
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} regexp The second number in an addition.
 * @param {string|mumber} defaultVariable The second number in an addition.
 * @param {string|mumber} nullReplacement The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * dataNumberFormat(/(\d)/g, 0,1)
 *=> 1
 */
declare function dataNumberFormat(regexp: any, defaultVariable: string | mumber, nullReplacement: string | mumber): any;
