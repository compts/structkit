import {getTypeofInternal} from '../core/getTypeOf.js';

import {zero} from '../core/defaultValue.js';

/**
 * Ge the empty value of specify argument type
 *
 * @since 1.0.1
 * @category Function
 * @param {any} value Any value type that you want an empty return
 * @returns {any} Returns empty either Json or Array
 * @example
 *
 * empty([])
 * => []
 */
function empty (value) {

    if (getTypeofInternal(value) === "json") {

        return {};

    }

    if (getTypeofInternal(value) === "array" || getTypeofInternal(value) === "arguments") {

        return [];

    }

    if (getTypeofInternal(value) === "string") {

        return '';

    }
    if (getTypeofInternal(value) === "number") {

        return zero;

    }
    if (getTypeofInternal(value) === "uint16Array") {

        return Uint16Array.from([]);

    }
    if (getTypeofInternal(value) === "uint8Array") {

        return Uint8Array.from([]);

    }

    return value;

}
export default empty;

