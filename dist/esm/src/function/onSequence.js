import varExtend from './varExtend';

/**
 * On sequence
 *
 * @since 1.4.1
 * @category Seq
 * @param {any} func a Callback function
 * @param {object=} wait timer for delay
 * @param {object=} option option for delay
 * @returns {string} Returns object.
 * @example
 *
 *  onSequence(()=>{})
 *=>'11'
 */
function onSequence (func, wait, option) {

    const zero = 0;
    const one = 1;
    const extend = varExtend(option, {
        "limitCounterClear": 0
    });

    const valueWaited = wait || zero;
    let counter = 0;

    const interval = setInterval(function () {

        func();
        if (extend.limitCounterClear >zero) {

            if (counter === extend.limitCounterClear) {

                clearInterval(interval);

            }

        }

        counter += one;

    }, valueWaited);

    const sequence = new ClassSequence(interval, extend);

    return sequence;

}

/**
 * On wait
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} interval timer for delay
 * @param {object} extend The option for delay
 * @returns {any} Returns the object.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
function ClassSequence (interval, extend) {

    this.interval = interval;

    this.extend = extend;

}

ClassSequence.prototype.cancel = function () {

    clearInterval(this.interval);

};

export default onSequence;

