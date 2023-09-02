import getTypeof from './getTypeof';

/**
 * Get JSON or  Array as empty variable
 *
 * @since 1.0.1
 * @category Any
 * @param {any} value Either Json or Array
 * @returns {any} Returns empty either Json or Array
 * @example
 *
 * getJSONVariable([])
 * => []
 */
function getJSONVariable (value) {

    if (getTypeof(value)==="json") {

        return {};

    }

    if (getTypeof(value)==="array") {

        return [];

    }

    return value;

}
export default getJSONVariable;

