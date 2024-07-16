const has = require('./_has');
const each = require('../function/each');
const empty = require('../function/empty');
const baseAppend = require("./baseAppend");
const {zero, one} = require("./defaultValue");


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

    each(objectValue, function (key, value) {

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
module.exports=baseMap;

