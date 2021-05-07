const getTypeof = require('../function/getTypeof');


/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number} value The first number in an addition.
 * @param {number} start The first number in an addition.
 * @param {number} end The first number in an addition.
 * @param {boolean} isGetLast The first number in an addition.
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function getIndexOf (objectValue, value, start, end, isGetLast) {

    const indexOfDefaultValue=-1;
    const incrementDefaultValue=1;

    let referenceValue = -1;

    if (getTypeof(objectValue)==="array") {

        for (let inc=start; inc<end;) {

            if (objectValue[inc]===value) {

                if (isGetLast === false) {

                    return inc;

                }
                referenceValue = inc;


            }

            inc+=incrementDefaultValue;

        }

    }

    return isGetLast === false
        ?indexOfDefaultValue
        :referenceValue;

}
module.exports=getIndexOf;;

