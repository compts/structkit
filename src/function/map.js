const has = require('./has');
const each = require('./each');
const {getTypeofInternal} = require('../core/getTypeOf');
const empty = require('./empty');
const curryArg = require("../core/curryArg");

/**
 * To map the value of json or array
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any=} func Callback function
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * map([1,2],function(value) { return value+2 } )
 *=> [3, 4]
 */
function map (objectValue, func) {

    return curryArg(function (rawObjectValue, rawFunc) {

        const strTypeOf =getTypeofInternal(rawObjectValue);
        const emptyDefaultValue=0;
        const incrementDefaultValue=1;
        const value_arry=empty(rawObjectValue);
        let cnt=emptyDefaultValue;

        each(rawObjectValue, function (key, value) {

            if (has(rawFunc)) {

                if (strTypeOf === "array") {

                    value_arry.push(rawFunc(value, key, cnt));
                    cnt += incrementDefaultValue;

                } else {

                    const dataFunc = rawFunc(value, key, cnt);

                    value_arry[key] = dataFunc;

                }

            }

        });

        return value_arry;

    }, [
        objectValue,
        func
    ]);

}
module.exports=map;

