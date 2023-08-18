export default each;
/**
 * Each or for loop function you are familiar with
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Array or json.
 * @param {Function=} func Function data
 * @returns {any} Array or json
 * @example
 *
 * each([1,2],(key,value)=>{ })
 *
 */
declare function each(objectValue: any, func?: Function | undefined): any;
