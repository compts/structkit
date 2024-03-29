import getTypeof from './getTypeof';

import has from './has';

import each from './each';

import isEmpty from './isEmpty';

/**
 * Sort array
 *
 * @since 1.0.1
 * @category Array
 * @param {any} objectValue Array
 * @param {boolean=} order True for ascend then false for descend
 * @param {any=} func Callback function or sort type
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
function sort (objectValue, order, func) {

    const jsonn=objectValue;
    let asc=true;
    let types='any';

    if (has(order) && getTypeof(order) ==='boolean') {

        asc= order;

    }

    if (has(func) && getTypeof(func) ==='string') {

        types= func;

    }

    const js_m=getTypeof(jsonn)==="json"
        ?each(jsonn)
        :jsonn;

    const finalResponse=js_m.sort(function (orderA, orderB) {

        if (has(func) && getTypeof(func) ==='function') {

            return func(orderA, orderB);

        }

        let sortOrderA = orderA;
        let sortOrderB = orderB;

        if (getTypeof(orderA) === "string" && getTypeof(orderB) === "string") {

            if (isEmpty(types) === false) {

                if (types ==='any') {

                    sortOrderA =orderA.charCodeAt();
                    sortOrderB= orderB.charCodeAt();

                }
                if (types ==='lowercase') {

                    sortOrderA =orderA.toLowerCase().charCodeAt();
                    sortOrderB= orderB.toLowerCase().charCodeAt();

                }

                if (types ==='uppercase') {

                    sortOrderA =orderA.toUpperCase().charCodeAt();
                    sortOrderB= orderB.toUpperCase().charCodeAt();

                }

            }

        }

        if (asc) {

            return sortOrderA - sortOrderB;

        }

        return sortOrderB - sortOrderA;

    });

    return finalResponse;

}
export default sort;

