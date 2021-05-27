const has = require('./has');

const each = require('./each');

const getTypeof = require('./getTypeof');


/**
 * Map
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * map([1,2],1,2 )
 *=>[2]
 */
function map (objectValue, func) {

    const strTypeOf =getTypeof(objectValue);
    const emptyDefaultValue=0;
    const incrementDefaultValue=1;
    const value_arry=strTypeOf==="array"
        ?[]
        :{};
    let cnt=emptyDefaultValue;

    each(objectValue, function (key, value) {

        if (has(func)) {

            if (strTypeOf==="array") {

                value_arry.push(func(value, key, cnt));
                cnt+=incrementDefaultValue;

            } else {

                const dataFunc = func(value, key, cnt);

                value_arry[key] = dataFunc;

            }

        }

    });

    return value_arry;

}
module.exports=map;;

