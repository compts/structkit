import toString from './toString';

/**
 * Regex Count Group number
 *
 * @since 1.4.7
 * @category String
 * @param {any} value Value you want to convert in array
 * @returns {number} Return in array.
 * @example
 *
 * regexCountGroup('/(abs|scs)@0@@1@/')
 * =>[1]
 */
function regexCountGroup (value) {

    const one =1;

    return new RegExp(toString(value) + '|').exec('').length - one;

}
export default regexCountGroup;

