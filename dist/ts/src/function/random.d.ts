export default random;
/**
 * Random value from array list
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} valueArray Array
 * @param {number} minValue Minimum value base on index
 * @param {number} maxValue  Max value base on index
 * @returns {string|number} Return string or number in array
 * @example
 *
 * random([10,20,30],0,3 )
 *=>'[20]'
 */
declare function random(valueArray: any, minValue: number, maxValue: number): string | number;
