const varExtend = require('./varExtend');

const {zero, one} = require("../variable/defaultValue");

/**
 * On sequence
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {number=} wait timer for delay
 * @param {object=} option option for delay
 * @returns {object} Returns object.
 * @example
 *
 *  onSequence(()=>{})
 *=>'11'
 */
function onSequence (func, wait, option) {

    const extend = varExtend({

        "autoStart": true,
        "limitCounterClear": zero
    }, option);


    const sequence = new ClassSequence(extend, wait, func);

    if (extend.autoStart) {

        sequence.start();

    }

    return sequence;

}

/**
 * On sequence class
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} extend The second number in an addition.
 * @param {any} wait timer for delay
 * @param {any} func The function to execute
 * @returns {any} Returns the object.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
function ClassSequence (extend, wait, func) {

    this.interval = null;

    this.extend = extend;

    this.wait = wait;

    this.func = func;

}

ClassSequence.prototype.cancel = function () {

    clearInterval(this.interval);

};


ClassSequence.prototype.start = function () {

    const valueWaited = this.wait || zero;
    let counter = zero;
    // eslint-disable-next-line consistent-this
    const main = this;

    main.interval = setInterval(function () {

        main.func();
        if (main.extend.limitCounterClear >zero) {

            if (counter >= main.extend.limitCounterClear) {

                clearInterval(main.interval);

            }

        }

        counter += one;

    }, valueWaited);

};
module.exports = onSequence;
