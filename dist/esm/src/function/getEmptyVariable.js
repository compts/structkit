import {getTypeofInternal} from '../core/getTypeOf';

/**
 * Get JSON or  Array as empty variable(rename from `getJSONVariable`)
 *
 * @since 1.0.1
 * @category Any
 * @param {any} value Either Json or Array
 * @returns {any} Returns empty either Json or Array
 * @example
 *
 * getEmptyVariable([])
 * => []
 */
function getEmptyVariable (value) {

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

    return value;

}
export default getEmptyVariable;

