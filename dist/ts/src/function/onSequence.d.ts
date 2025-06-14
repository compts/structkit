export default onSequence;
/**
 * On sequence
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {object=} wait timer for delay
 * @param {object=} option option for delay
 * @returns {object} Returns object.
 * @example
 *
 *  onSequence(()=>{})
 *=>'11'
 */
declare function onSequence(func: any, wait?: object | undefined, option?: object | undefined): object;
