export default limit;
/**
 * Limit
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Data must be array
 * @param {number} minValue Minimum value
 * @param {number} maxValue Maximum value
 * @param {any} func Callback function
 * @returns {any} Returns the object.
 * @example
 *
 * limit([1,2],1,2 )
 *=>{'1':2}
 */
declare function limit(objectValue: any, minValue: number, maxValue: number, func: any): any;
