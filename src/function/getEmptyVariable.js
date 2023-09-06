const getTypeof = require('./getTypeof');


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

    if (getTypeof(value)==="json") {

        return {};

    }

    if (getTypeof(value)==="array") {

        return [];

    }

    if (getTypeof(value)==="string") {

        return '';

    }
    if (getTypeof(value)==="number") {

        return zero;

    }

    return value;

}
module.exports=getEmptyVariable;

