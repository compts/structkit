import where from './where';

import indexOf from './indexOf';

import isEmpty from './isEmpty';

import first from './first';

import {entity, listType} from '../variable/htmlentity';

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
 * stringUnEscape('yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss')
 *=>"yahii & adad ^ss"
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
export default stringUnEscape;

