export default each;
/**
 * Each or for loop function you are familiar with
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Array or json.
 * @param {Function=} func Function to execute the loop with callback key,
 * @returns {any} Array or json
 * @example
 *
 * each([1,2],(value,key,localGlobal)=>{ })
 *
 */
declare function each(objectValue: any, func?: Function | undefined): any;
