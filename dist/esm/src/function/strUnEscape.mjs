import once from './once.mjs';

import where from './where.mjs';

import indexOfNotExist from './indexOfNotExist.mjs';

import isEmpty from './isEmpty.mjs';

import first from './first.mjs';

import {entity, listType} from '../variable/htmlentity.mjs';

import toString from './toString.mjs';

/**
 * String Unescape
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} type Configuration
 * @returns {string} Returns unescape string
 * @example
 *
 * strUnEscape('yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss')
 *=>"yahii & adad ^ss"
 */
function strUnEscape (value, type) {

    const typeVal = type || "entity";

    if (indexOfNotExist(typeVal, listType)) {

        return "";

    }

    const regexReplace = toString(value).replace(/(&[#]{0,1}[a-zA-Z-0-9]{1,};)/g, function (str1) {

        const search = {};

        search[typeVal] =str1;

        const whr = where(once(search), entity);

        return isEmpty(whr)
            ? str1
            : first(whr).html;

    });

    return regexReplace;

}
export default strUnEscape;

