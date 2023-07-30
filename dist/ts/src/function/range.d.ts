export default range;
/**
 * Generate array of data from specific limit or where the index to start
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} maxValue Max value you to generate in array
 * @param {number=} minValue Min value you to generate in array
 * @returns {any[]} Return in array.
 * @example
 *
 * range(10)
 *=>[1,2,3,4,5,6,7,8,9,10]
 */
declare function range(maxValue: number, minValue?: number | undefined): any[];
