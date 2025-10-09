import getTypeof from './getTypeof.js';

import baseSort from '../core/baseSort.js';

import has from './has.js';

import curryArg from '../core/curryArg.js';

import {one} from '../variable/defaultValue.js';

import isEmpty from './isEmpty.js';

/**
 * Sort array
 *
 * @since 1.0.1
 * @category Array
 * @param {any[]} objectValue List of array you want to sort
 * @param {boolean=} order True for ascend then false for descend
 * @param {string=} type Callback function or sort type [any, lowercase, uppercase] default `any`
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
function sort (objectValue, order, type) {

    return curryArg(function (rawObjectValue, rawOrder, rawType) {

        let asc=true;
        let types='any';

        if (has(rawOrder) && getTypeof(rawOrder) === 'boolean') {

            asc= rawOrder;

        }

        if (has(rawType) && getTypeof(rawType) === 'string') {

            types= rawType;

        }

        const finalResponse=baseSort(rawObjectValue, function (orderA, orderB) {

            let sortOrderA = orderA;
            let sortOrderB = orderB;

            if (getTypeof(orderA) === "string" && getTypeof(orderB) === "string") {

                if (isEmpty(types) === false) {

                    if (types === 'any') {

                        sortOrderA =orderA.charCodeAt();
                        sortOrderB= orderB.charCodeAt();

                    }
                    if (types === 'lowercase') {

                        sortOrderA =orderA.toLowerCase().charCodeAt();
                        sortOrderB= orderB.toLowerCase().charCodeAt();

                    }

                    if (types === 'uppercase') {

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

    }, [
        objectValue,
        order,
        type
    ], one);

}
export default sort;

