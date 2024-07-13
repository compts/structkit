import where from './where.js';

import indexOfNotExist from './indexOfNotExist.js';

import isEmpty from './isEmpty.js';

import first from './first.js';

import {entity, listType} from '../variable/htmlentity.js';

import toString from './toString.js';

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
 * stringUnEscape('yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss')
 *=>"yahii & adad ^ss"
 */
function stringUnEscape (value, type) {

    const typeVal = type || "entity";

    if (indexOfNotExist(listType, typeVal)) {

        return "";

    }

    const regexReplace = toString(value).replace(/(&[#]{0,1}[a-zA-Z-0-9]{1,};)/g, function (str1) {

        const search = {};

        search[typeVal] =str1;

        const whr = where(entity, search);

        return isEmpty(whr)
            ? str1
            : first(whr).html;

    });

    return regexReplace;

}
export default stringUnEscape;

