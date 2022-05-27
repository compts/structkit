const where = require('./where');
const indexOfNotExist = require('./indexOfNotExist');
const isEmpty = require("./isEmpty");
const first = require("./first");
const {entity, listType} = require("../variable/htmlentity");

/**
 * String Escape
 *
 * @since 1.3.1
 * @category Seq
 * @param {string} value String data
 * @param {string=} type Configuration
 * @returns {string} Returns escape string
 * @example
 *
 * stringEscape("yahii & adad ^ss")
 *=> 'yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'
 */
function stringEscape (value, type) {

    const typeVal = type || "entity";

    if (indexOfNotExist(listType, typeVal)) {

        return "";

    }

    const regexReplace = value.replace(/([\s<>"'^&{}])/g, function (str1) {

        const search = {"html": str1};

        const whr = where(entity, search);

        return isEmpty(whr)
            ? str1
            : first(whr)[typeVal];

    });

    return regexReplace;

}
module.exports=stringEscape;

