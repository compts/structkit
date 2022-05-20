const getTypeof = require('./getTypeof');


/**
 * Get JSON Variable
 *
 * @since 1.0.1
 * @category Seq
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
module.exports=getJSONVariable;

