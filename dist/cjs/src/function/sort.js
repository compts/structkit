const getTypeof = require('./getTypeof');

const has = require('./has');

const each = require('./each');


/**
 * Sort
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {number} index The second number in an addition.
 * @param {boolean} order The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
function sort (objectValue, index, order, func) {

    let jsonn=objectValue;
    const asc=has(order)
        ?order
        :true;
    const js_m=getTypeof(jsonn)==="json"
        ?each(jsonn)
        :jsonn;

    jsonn=js_m.sort(function (orderA, orderB) {

        if (has(func)) {

            return func(orderA, orderB);

        }
        if (asc) {

            return orderA[index] > orderB[index];

        }

        return orderB[index] > orderA[index];


    });

    return jsonn;

}
module.exports=sort;;

