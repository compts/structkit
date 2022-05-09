import where from './where';

import indexOf from './indexOf';

import count from './indexOf';

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
 * roundDecimal(11.1111111,3 )
 *=>11.11
 */
function stringEscape (value, type) {

    const typeVal = type || "entity";

    if (indexOf(listType, typeVal) === -1) {

        return "";

    }

    const regexReplace = value.replace(/([\s<>"'^&])/g, function (str1) {

        const search = {"html": str1};

        const whr = where(entity, search);

        return count(whr) === 0
            ? str1
            : whr[0][typeVal];

    });

    return regexReplace;

}
export default stringEscape;

