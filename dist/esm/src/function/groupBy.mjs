import has from './has.mjs';

import curryArg from '../core/curryArg.mjs';

import each from './each.mjs';

import clone from './clone.mjs';

import empty from './empty.mjs';

import append from './append.mjs';

/**
 * To group the value of json or array
 *
 * @since 1.4.8
 * @category Collection
 * @param {any=} func Callback function
 * @param {any=} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * groupBy(function (value) { return value % 2}, [1,2,3,4,5,6,7])
 *=> {0:[2,4,6], 1:[1,3,5,7]}
 */
function groupBy (func, objectValue) {

    return curryArg(function (rawFunc, rawObjectValue) {

        const value_arry=clone(empty(rawObjectValue));

        const groupData = {};

        each(rawObjectValue, function (value, key) {

            if (has(rawFunc)) {

                const dataFunc = rawFunc(value, key);

                if (!has(groupData, dataFunc)) {

                    groupData[dataFunc] = value_arry;

                }
                groupData[dataFunc] = append(clone(groupData[dataFunc]), value, key);

            }

        });

        return groupData;

    }, [
        func,
        objectValue
    ]);

}
export default groupBy;

