import where from './where';

import indexOf from './indexOf';

import isEmpty from './isEmpty';

import first from './first';

import {entity, listType} from '../variable/htmlentity';

/**
 * String Escape
 *
 * @since 1.3.1
 * @category Seq
 * @param {number} value The second number in an addition.
 * @param {string} type The second number in an addition.
 * @returns {number} Returns the total.
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
export default stringEscape;

