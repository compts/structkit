import where from './where';

import indexOfNotExist from './indexOfNotExist';

import isEmpty from './isEmpty';

import first from './first';

import {entity, listType} from '../variable/htmlentity';

import toString from './toString';

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

    const regexReplace = toString(value).replace(/([\s<>"'^&{}])/g, function (str1) {

        const search = {"html": str1};

        const whr = where(entity, search);

        return isEmpty(whr)
            ? str1
            : first(whr)[typeVal];

    });

    return regexReplace;

}
export default stringEscape;

