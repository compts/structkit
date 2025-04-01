import has from './_has.js';

import each from '../function/each.js';

import empty from '../function/empty.js';

import baseAppend from './baseAppend.js';

import {zero, one} from './defaultValue.js';

/**
 * To map the value of json or array
 *
 * @since 1.4.8
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any=} func Callback function
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * baseMap([1,2],function(value) { return value+2 } )
 *=> [3, 4]
 */
function baseMap (objectValue, func) {

    let value_arry=empty(objectValue);
    let cnt=zero;

    const that = this;

    each(objectValue, function (value, key) {

        if (has(func)) {

            const dataFunc = func.apply(
                that,
                [
                    value,
                    key,
                    cnt
                ]
            );

            value_arry = baseAppend(value_arry, dataFunc, key);
            cnt += one;

        }

    });

    return value_arry;

}
export default baseMap;

