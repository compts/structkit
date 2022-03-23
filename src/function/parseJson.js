/**
 * Parse Json
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function parseJson (value) {

    const emptyDefaultValue=0;
    const stripValue=value.replace(/(&quot;)/gi, '"', value).replace(/(&nbsp;)/gi, ' ', value);
    let returnValue=null;

    if ((/^[\],:{}\s]*$/).test(stripValue.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        if (stripValue.length>emptyDefaultValue && !(/^\s*$/).test(stripValue)) {

            returnValue = eval('(' + stripValue + ')');

        }

    }

    return returnValue;

}
module.exports=parseJson;

