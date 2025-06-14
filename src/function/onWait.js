const onDelay = require("./onDelay");
const {getWindow} = require('../core/global');

/**
 * On wait
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {object=} wait timer for delay
 * @returns {object} Returns the total.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
function onWait (func, wait) {

    const browserWindow = getWindow();
    let timerId = null;

    let useReqeustAdnimation = null;

    if (browserWindow) {

        // Check if requestAnimationFrame is available
        useReqeustAdnimation = typeof browserWindow.requestAnimationFrame === "function";

    }


    /**
     * On wait
     *
     * @since 1.4.1
     * @category Seq
     * @param {any} pendingFunc The second number in an addition.
     * @param {object} waiting The second number in an addition.
     * @returns {string} Returns the total.
     * @example
     *
     *  onWait(()=>{})
     *=>'11'
     */
    function startTimer (pendingFunc, waiting) {

        if (useReqeustAdnimation) {

            clearTimer();

            return browserWindow.requestAnimationFrame(pendingFunc);

        }

        return onDelay(pendingFunc, waiting);

    }

    /**
     * On wait
     * @returns {any} Returns the total.
     *
     */
    function clearTimer () {

        if (useReqeustAdnimation) {

            browserWindow.cancelAnimationFrame(timerId);

        }
        if (timerId !== null && typeof timerId.cancel === "function") {

            timerId.cancel();

        }

    }

    /**
     * On wait
     * @returns {any} Returns the total.
     *
     */
    function bootLoader () {

        timerId = startTimer(func, wait);

        return {};

    }

    return bootLoader();

}

module.exports = onWait;
