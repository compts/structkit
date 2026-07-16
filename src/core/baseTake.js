const {getTypeofInternal} = require('./getTypeOf');
const limit = require("../function/limit");
const toArray = require("../function/toArray");
const getValue = require("../function/getValue");


/**
 * Get the value from index zero until the last value
 *
 * @since 1.4.86
 * @category Math
 * @param {any[]|string} rawList List data
 * @param {number} startIndex Start index number
 * @param {number} lastIndex Last index number
 * @returns {any} Returns array
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
        ?toArray(rawGetValue).join("")
        :rawGetValue;


}
module.exports=baseTake;
