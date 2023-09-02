export default onWait;
/**
 * On wait
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {object=} wait timer for delay
 * @returns {string} Returns the total.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
declare function onWait(func: any, wait?: object | undefined): string;
