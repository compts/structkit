export default sortBy;
/**
 * Sort By function is used to sort an array of values.
 *
 * @since 1.4.87
 * @category Array
 * @param {any[]} objectValue List of array you want to sort
 * @param {Function} func Callback function or sort type
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
declare function sortBy(objectValue: any[], func: Function): any[];
