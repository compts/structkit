import has from './has';
import each from './each';

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

    const emptyDefaultValue=0;
    const incrementDefaultValue=1;
    const value_arry=[];
    let cnt=emptyDefaultValue;

    each(objectValue, function (key, value) {

        if (has(func)) {

            value_arry.push(func(value, key, cnt));
            cnt+=incrementDefaultValue;

        }

    });

    return value_arry;

}
export default map;
