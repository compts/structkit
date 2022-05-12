const where = require('./where');
const indexOf = require('./indexOf');
const isEmpty = require("./isEmpty");
const first = require("./first");
const {entity, listType} = require("../variable/htmlentity");

/**
 * String Escape
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @param {string=} type The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * stringEscape("yahii & adad ^ss")
 *=> 'yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'
 */
function stringEscape (value, type) {

    const minusOne = -1;
    const typeVal = type || "entity";

    if (indexOf(listType, typeVal) === minusOne) {

        return "";

    }

    const regexReplace = value.replace(/([\s<>"'^&{}])/g, function (str1) {

        const search = {"html": str1};

        const whr = where(entity, search);

        return isEmpty(whr)
            ? str1
            : first(whr).value[typeVal];

    });

    return regexReplace;

}
module.exports=stringEscape;

