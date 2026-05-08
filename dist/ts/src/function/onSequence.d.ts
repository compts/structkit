export default onSequence;
export type SequenceResult = {
    /**
     * - Cancels the sequence
     */
    cancel: () => void;
    /**
     * - Starts the sequence
     */
    start: () => void;
};
/**
 * @typedef {Object} SequenceResult
 * @property {function(): void} cancel - Cancels the sequence
 * @property {function(): void} start - Starts the sequence
 */
/**
 * On sequence function, it calls the callback repeatedly until canceled or limitCounterClear is reached. setInterval is used to schedule the callback execution, and clearInterval is used to stop it when necessary.
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {number=} wait timer for delay
 * @param {object=} option option for delay
 * @returns {SequenceResult} Returns object.
 * @example
 *
 *  onSequence(()=>{})
 *=>'11'
 */
declare function onSequence(func: any, wait?: number | undefined, option?: object | undefined): SequenceResult;
