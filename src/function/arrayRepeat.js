const map = require('./map');
const range = require('./range');

/**
 * Repeat value in array
 *
 * @since 1.4.7
 * @category Array
 * @param {any} value String you want to duplicate
 * @param {number} valueRepetion how many times you want to repeate
 * @returns {any[]} Return in string or number.
 * @example
 *
 * arrayRepeat("s",2 )
 *=>['s','s']
 */
function arrayRepeat (value, valueRepetion) {

    const emptyDefaultValue=0;
    const nm_rpt=valueRepetion||emptyDefaultValue;

    return map(range(nm_rpt), function () {

        return value;

    });

}
module.exports=arrayRepeat;

