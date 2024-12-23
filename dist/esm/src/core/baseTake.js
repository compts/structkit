import {getTypeofInternal} from './getTypeOf.js';

import limit from '../function/limit.js';

import getValue from '../function/getValue.js';

/**
 * Get the value from index zero until the last value
 *
 * @since 1.4.86
 * @category Math
 * @param {any[]|string} rawList Second number
 * @param {number} startIndex Second number
 * @param {number} lastIndex Second number
 * @returns {number} Returns true or false.
 * @example
 *
 * baseTake(1, 1)
 * // => 1
 */
function baseTake (rawList, startIndex, lastIndex) {

    const refRawList = getTypeofInternal(rawList) === "string"
        ?rawList.split("")
        :rawList;

    const varLimit = limit(refRawList, startIndex, lastIndex);

    const rawGetValue = getValue(varLimit);

    return getTypeofInternal(rawList) === "string"
        ?rawGetValue.join("")
        :rawGetValue;

}
export default baseTake;

