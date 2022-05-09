const where = require('./where');
const indexOf = require('./indexOf');
const isEmpty = require("./isEmpty");
const first = require("./first");
const {entity, listType} = require("../variable/htmlentity");

/**
 * String Unescape
 *
 * @since 1.3.1
 * @category Seq
 * @param {number} value The second number in an addition.
 * @param {string} type The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * roundDecimal(11.1111111,3 )
 *=>11.11
 */
function stringUnEscape (value, type) {

    const typeVal = type || "entity";
    const minusOne = -1;

    if (indexOf(listType, typeVal) === minusOne) {

        return "";

    }

    const regexReplace = value.replace(/(&[#]{0,1}[a-zA-Z-0-9]{1,};)/g, function (str1) {

        const search = {};

        search[typeVal] =str1;

        const whr = where(entity, search);

        return isEmpty(whr)
            ? str1
            : first(whr).value.html;

    });

    return regexReplace;

}
module.exports=stringUnEscape;

