import baseReduce from '../core/baseReduce.js';

import {getTypeofInternal} from '../core/getTypeOf.js';

import {zero, one, two} from '../core/defaultValue.js';

import append from './append.js';

import remove from './remove.js';

import defaultTo from './defaultTo.js';

import isEmpty from './isEmpty.js';

import first from './first.js';

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists
 *
 * @since 1.4.87
 * @category Condition
 * @param {any} value First number
 * @param {number=} deepLimit First number
 * @returns {any} Returns array
 * @example
 *
 * fromPairs([[5,6],[7,2]])
 * // => {5:6,7:2}
 */
function fromPairs (value, deepLimit) {

    const defineDeepLimit = defaultTo(two);

    if (getTypeofInternal(value) !== "array") {

        throw new Error("Value must be an array");

    }

    return baseReduce({}, value, function (total, subBalue) {

        if (getTypeofInternal(subBalue) === "array") {

            if (subBalue.length > one) {

                const depthValue = getDepthValue(remove(subBalue, zero, defineDeepLimit(deepLimit)));

                append(total, depthValue, subBalue[zero]);

            }

        }

        return total;

    });

}

/**
 * Recursively retrieves the value from an array of pairs, removing any zero values and returning the first non-empty value.
 *
 * @since 1.4.87
 * @category Condition
 * @param {any} value First number
 * @param {number} deepLimit First number
 * @returns {any} Returns array
 * @example
 *
 * fromPairs([[5,6],[7,2]])
 * // => {5:6,7:2}
 */
function getDepthValue (value) {

    const getRmoveValue = remove(value, zero);

    if (isEmpty(getRmoveValue)) {

        return first(value);

    }

    const dataObj = {};

    dataObj[first(value)] = getDepthValue(getRmoveValue);

    return dataObj;

}
export default fromPairs;

