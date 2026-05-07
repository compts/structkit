import varExtend from './varExtend.js';

import {zero} from '../variable/defaultValue.js';

/**
 * On delay
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {number=} wait timer for delay
 * @param {object=} option option for delay
 * @returns {object} Returns object.
 * @example
 *
 *  onDelay(()=>{})
 *=>'11'
 */
function onDelay (func, wait, option) {

    const extend = varExtend({
        "autoStart": true
    }, option);

    const sequence = new ClassDelay(extend, wait, func);

    if (extend.autoStart) {

        sequence.start();

    }

    return sequence;

}

/**
 * On delay class
 *
 * @since 1.0.1
 * @category Seq
 *
 * @param {object} extend option for delay
 * @param {any} wait timer for delay
 * @param {any} func The function to execute
 * @returns {object} Returns object.
 * @example
 *
 *  onDelay(()=>{})
 *=>'11'
 */
function ClassDelay (extend, wait, func) {

    this.extend = extend;

    this.wait = wait;

    this.func = func;

    this.timeout = null;

}

ClassDelay.prototype.cancel = function () {

    clearTimeout(this.timeout);

};

ClassDelay.prototype.start = function () {

    const valueWaited = this.wait || zero;

    // eslint-disable-next-line consistent-this
    const main = this;

    this.timeout = setTimeout(function () {

        main.func();

    }, valueWaited);

};

export default onDelay;

