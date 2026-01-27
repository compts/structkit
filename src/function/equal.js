const curryArg = require("../core/curryArg");
const {getTypeofInternal} = require('../core/getTypeOf');


const count = require("./count");
const each = require("./each");
const has = require("./has");


const {two, zero, one} = require("../variable/defaultValue");

/**
 * To check if the two arguments are equal
 *
 * @since 1.4.8
 * @category Predicate
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
 * @example
 *
 * equal('as', 'as')
 * // => true
 */
function equal (value1, value2) {

    return curryArg(function (aa, bb) {

        if (getTypeofInternal(aa) !== getTypeofInternal(bb)) {

            return false;

        }

        if (getTypeofInternal(aa) === "json" && getTypeofInternal(bb) === "json") {

            return searchValueInJson(aa, bb);

        }

        return aa === bb;

    }, [
        value1,
        value2
    ], two);

}


/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue Array
 * @param {number} searchValue key of array
 * @returns {boolean} Returns the total.
 * @example
 *
 * searchValueInJson([1,2], 1)
 * // => 0
 */
function searchValueInJson (objectValue, searchValue) {

    let counter = zero;

    each(objectValue, function (value, key) {

        if (has(searchValue, key)) {

            if (searchValue[key] === value) {

                counter += one;

            }

        }

    });

    return count(objectValue) === counter;

}
module.exports=equal;
