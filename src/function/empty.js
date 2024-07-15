const {getTypeofInternal} = require('../core/getTypeOf');

/**
 * Get JSON or  Array as empty variable(rename from `getEmptyVariable`)
 *
 * @since 1.0.1
 * @category Any
 * @param {any} value Either Json or Array
 * @returns {any} Returns empty either Json or Array
 * @example
 *
 * empty([])
 * => []
 */
function empty (value) {

    const zero = 0;

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

        return Uint16Array.from("");

    }
    if (getTypeofInternal(value) === "uint8Array") {

        return Uint8Array.from("");

    }

    return value;

}
module.exports=empty;

