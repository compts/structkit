const varExtend = require('./varExtend');

const {zero, one} = require("../variable/defaultValue");

const defaultOption = {

    "autoStart": true,
    "limitCounterClear": zero
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
function onSequence (func, wait, option) {

    const extend = varExtend(defaultOption, option);


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

    this.returned = null;

}

ClassSequence.prototype.cancel = function () {

    clearInterval(this.interval);

};


ClassSequence.prototype.start = function () {

    this.extend = varExtend(defaultOption, this.extend);
    const valueWaited = this.wait || zero;
    let counter = zero;
    // eslint-disable-next-line consistent-this
    const main = this;

    main.interval = setInterval(function () {

        main.returned = main.func();

        counter += one;
        if (main.extend.limitCounterClear >zero && counter >= main.extend.limitCounterClear) {


            clearInterval(main.interval);


        }


    }, valueWaited);

};
module.exports = onSequence;
