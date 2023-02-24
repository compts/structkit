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
function onWait (func, wait, option) {
    const extend = varExtend(option,{
        limitCounterClear: 0
    });

    


}

module.exports = onWait;
