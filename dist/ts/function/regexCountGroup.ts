const toString = require('./toString');

const {one} = require("../variable/defaultValue");

/**
 * Regex Count Group number
 *
 * @since 1.4.7
 * @category Function
 * @param {any} value Value you want to convert in array
 * @returns {number} Return in array.
 * @example
 *
 * regexCountGroup('/(abs|scs)@0@@1@/')
 *=>[1]
 */
function regexCountGroup (value) {

    return new RegExp(toString(value) + '|').exec('').length - one;

}
module.exports=regexCountGroup;

