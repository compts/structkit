const varExtend = require('./varExtend');

/**
 * On wait
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} func The second number in an addition.
 * @param {object} data The second number in an addition.
 * @param {object} option The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
function onSequence (func, wait, option) {
    const extend = varExtend(option,{
        limitCounterClear: 0
    });

    const valueWaited = wait || 0;
    let counter = 0;

    const interval = setInterval(function(){
        func();
        if (extend.limitCounterClear >0){
            if(counter === extend.limitCounterClear) {
                clearInterval(interval);
            }
        }
        counter++;
    },valueWaited);

    const sequence = new ClassSequence(interval, extend);
    return sequence;
}


function ClassSequence(interval, extend) {
    this.interval = interval;
    this.extend = extend;

}

ClassSequence.prototype.cancel = function() {
    clearInterval(this.interval);
}

module.exports = onSequence;
