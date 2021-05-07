const getTypeof = require('./getTypeof');


/**
 * Get JSON Variable
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} value The second number in an addition.
 * @returns {array|object|string|number} Returns the total.
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
module.exports=getJSONVariable;;

