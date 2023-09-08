import has from './has';

import each from './each';

import clone from './clone';

import getEmptyVariable from './getEmptyVariable';

import append from './append';

/**
 * To group the value of json or array
 *
 * @since 1.4.8
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any=} func Callback function
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * groupBy([1,2,3,4,5,6,7], function (value) { return value % 2})
 *=> {0:[2,4,6], 1:[1,3,5,7]}
 */
function groupBy (objectValue, func) {

    const value_arry=clone(getEmptyVariable(objectValue));

    const groupData = {};

    each(objectValue, function (key, value) {

        if (has(func)) {

            const dataFunc = func(value, key);

            if (!has(groupData, dataFunc)) {

                groupData[dataFunc] = value_arry;

            }
            groupData[dataFunc] = append(clone(groupData[dataFunc]), value, key);

        }

    });

    return groupData;

}
export default groupBy;

