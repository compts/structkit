const getTypeof = require('./getTypeof');


/**
 * Get JSON Variable
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} value The second number in an addition.
 * @returns {any} Returns the total.
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
module.exports=getJSONVariable;

