
const map = require("./map");
const first = require("./first");
const count = require("./count");
const {getTypeofInternal} = require('../core/getTypeOf');
const {one} = require("../core/defaultValue");

/**
 * Get type of the variable
 *
 * @since 1.0.1
 * @category String
 * @param {...any} args Any data you want to check its property in multiple arguments
 * @returns {string|string[]} Get the property of variable
 * @example
 *
 * getTypeof([])
 * => array
 * getTypeof([],{})
 * => [array,json]
 */
function getTypeof (...args) {

    const getTypes = map(args, function (value) {

        return getTypeofInternal(value);

    });

    return count(getTypes) === one
        ?first(getTypes)
        :getTypes;

}
module.exports=getTypeof;

