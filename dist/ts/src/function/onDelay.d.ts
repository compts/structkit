export default onDelay;
export type DelayResult = {
    /**
     * - Cancels the delay
     */
    cancel: () => void;
    /**
     * - Starts the delay
     */
    start: () => void;
};
/**
 * @typedef {Object} DelayResult
 * @property {function(): void} cancel - Cancels the delay
 * @property {function(): void} start - Starts the delay
 */
/**
 * On delay function, it calls the callback after the specified delay. setTimeout is used to schedule the callback execution, and clearTimeout is used to stop it when necessary.
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {number=} wait timer for delay
 * @param {object=} option option for delay
 * @returns {DelayResult} Returns object.
 * @example
 *
 *  onDelay(()=>{})
 *=>'11'
 */
declare function onDelay(func: any, wait?: number | undefined, option?: object | undefined): DelayResult;
