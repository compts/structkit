import varExtend from './varExtend';

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
function onDelay (func, wait, option) {

    const zero = 0;
    const extend = varExtend(option, {
        "limitCounterClear": 0
    });

    const valueWaited = wait || zero;

    const timeout = setTimeout(function () {

        func();

    }, valueWaited);

    const sequence = new ClassDelay(timeout, extend);

    return sequence;

}

/**
 * On wait
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} timeout The second number in an addition.
 * @param {object} extend The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
function ClassDelay (timeout, extend) {

    this.timeout = timeout;

    this.extend = extend;

}

ClassDelay.prototype.cancel = function () {

    clearTimeout(this.timeout);

};

export default  onDelay;

