import curryArg from '../core/curryArg.js';

import getTypeof from './getTypeof.js';

import clone from './clone.js';

import toString from './toString.js';

/**
 * Swapping the value either string or array in there specific position
 *
 * @since 1.4.86
 * @category Collection
 * @param {number} firstValue The data you want to map
 * @param {number} secondValue data that you want to merge
 * @param {any[]|string} listValue Passing value either array or string
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * swap(0, 2, 'foo')
 *=> off
 */
function swap (firstValue, secondValue, listValue) {

    return curryArg(function (rawFirstValue, rawSecondValue, rawListValue) {

        let cloneRawListValueReturn = rawListValue;
        let isSplit = false;

        if (getTypeof(cloneRawListValueReturn) !== "array") {

            cloneRawListValueReturn = toString(cloneRawListValueReturn).split("");
            isSplit = true;

        }

        const cloneRawListValue = clone(cloneRawListValueReturn);

        cloneRawListValueReturn[rawFirstValue] = cloneRawListValue[rawSecondValue];
        cloneRawListValueReturn[rawSecondValue] = cloneRawListValue[rawFirstValue];

        if (isSplit) {

            cloneRawListValueReturn = cloneRawListValueReturn.join("");

        }

        return cloneRawListValueReturn;

    }, [
        firstValue,
        secondValue,
        listValue
    ]);

}
export default swap;

