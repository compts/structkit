export default onDelay;
/**
 * On delay
 *
 * @since 1.4.1
 * @category Seq
 * @param {any} func a Callback function
 * @param {object=} wait timer for delay
 * @param {object=} option option for delay
 * @returns {object} Returns object.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
declare function onDelay(func: any, wait?: object | undefined, option?: object | undefined): object;
