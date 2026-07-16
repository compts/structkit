import once from './once.mjs';

import where from './where.mjs';

import indexOfNotExist from './indexOfNotExist.mjs';

import isEmpty from './isEmpty.mjs';

import first from './first.mjs';

import {entity, listType} from '../variable/htmlentity.mjs';

import toString from './toString.mjs';

/**
 * String Escape
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} type Configuration
 * @returns {string} Returns escape string
 * @example
 *
 * strEscape("yahii & adad ^ss")
 *=> 'yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'
 */
function strEscape (value, type) {

    const typeVal = type || "entity";

    if (indexOfNotExist(typeVal, listType)) {

        return "";

    }

    const regexReplace = toString(value).replace(/([\s<>"'^&{}])/g, function (str1) {

        const search = {"html": str1};

        const whr = where(once(search), entity);

        return isEmpty(whr)
            ? str1
            : first(whr)[typeVal];

    });

    return regexReplace;

}
export default strEscape;

