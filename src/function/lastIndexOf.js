
const count = require('./count');

const getIndexOf = require('../core/getIndexOf');


/**
 * Last index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Array
 * @param {any} value Value you are searching for
 * @returns {any} Return get the index or array
 * @example
 *
 * lastIndexOf([1,2], 1)
 * // => 0
 */
function lastIndexOf (objectValue, value) {

    const start = 0;


    const indexValue = getIndexOf(objectValue, value, start, count(objectValue), true);

    return indexValue;

}
module.exports=lastIndexOf;

