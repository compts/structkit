import getTypeof from './getTypeof';
import has from './has';
import each from './each';

/**
 * Sort
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {number} index The second number in an addition.
 * @param {boolean} order The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
function sort (objectValue, index, order) {

    let jsonn=objectValue;
    const asc=has(order)
        ?order
        :true;
    const js_m=getTypeof(jsonn)==="json"
        ?each(jsonn)
        :jsonn;

    jsonn=js_m.sort(function (orderA, orderB) {

        if (asc) {

            return orderA[index] > orderB[index];

        }

        return orderB[index] > orderA[index];

    });

    return jsonn;

}
export default sort;
