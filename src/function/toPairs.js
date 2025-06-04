const baseReduce = require("../core/baseReduce");
const {getTypeofInternal} = require('../core/getTypeOf');
const getKey = require('./getKey');
const getValue = require('./getValue');

/**
 *  Converts an object into an array of key-value pairs. if the value is nested object, it will be converted to an array of key-value pairs recursively.
 *
 * @since 1.4.87
 * @category Collection
 * @param {any} value First number
 * @returns {any[]} Returns array
 * @example
 *
 * toPairs({"s":1,"ss":{"a":2}})
 * // => [["s",1],["ss",["a",2]]]
 */
function toPairs (value) {


    if (getTypeofInternal(value) !== "json") {

        throw new Error("Value must be an json");

    }

    return baseReduce([], value, function (total, subValue, subKey) {

        const subArray = [];

        subArray.push(subKey);
        setDepthValue(subArray, subValue);
        total.push(subArray);

        return total;

    });

}


/**
 * To recursively set the value in an array. If the value is a nested object, it will be converted to an array of key-value pairs recursively.
 *
 * @since 1.4.87
 * @category Condition
 * @param {any} arryData First number
 * @param {number} value First number
 * @returns {null} Returns array
 * @example
 *
 * fromPairs([[5,6],[7,2]])
 * // => {5:6,7:2}
 */
function setDepthValue (arryData, value) {

    if (getTypeofInternal(value) === "json") {

        arryData.push(getKey(value));
        setDepthValue(arryData, getValue(value));

    } else {

        arryData.push(value);

    }

}
module.exports=toPairs;
