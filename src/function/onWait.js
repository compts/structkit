const varExtend = require('./varExtend');
const onDelay = require("./onDelay");
const {getWindow} = require('../core/global');


/**
 * On wait
 *
 * @since 1.4.1
 * @category Seq
 * @param {any} func The second number in an addition.
 * @param {object} wait The second number in an addition.
 * @param {object} option The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
function onWait (func, wait, option) {

    const browserWindow = getWindow();
    const extend = varExtend(option, {});
    let timerId = null;


    const useReqeustAdnimation = typeof browserWindow.requestAnimationFrame === "function";

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

            return browserWindow.requestAnimationFrame();

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

        timerId.cancel();

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
