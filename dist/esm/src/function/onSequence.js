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
 * @param {any} interval The second number in an addition.
 * @param {object} extend The second number in an addition.
 * @returns {any} Returns the total.
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

