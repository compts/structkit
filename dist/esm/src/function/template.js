import varExtend from './varExtend.js';

import isJson from './isJson.js';

import parseString from './parseString.js';

import reduce from './reduce.js';

import toString from './toString.js';

import curryArg from '../core/curryArg.js';

import {one, two, zero} from '../variable/defaultValue.js';

/**
 * Template value
 *
 * @since 1.0.1
 * @category String
 * @param {string} templateString Template string
 * @param {any} data Parameter to replace
 * @param {any=} option The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 *  template("<!= test !>", {"test": 11})
 *=>'11'
 */
function template (templateString, data, option) {

    return curryArg(function (rawTemplateString, rawData, rawOption) {

        const default_option = varExtend({
            "close_tag": "!>",
            "open_tag": "<!",
            "throwError": false
        }, rawOption);

        const temp = syntaxCleanup(rawTemplateString, default_option);

        const tag_replace={
            "evaluate": default_option.open_tag+"[^=\\#]([\\s\\S]+?)"+default_option.close_tag,
            "interpolate": default_option.open_tag+"=([\\s\\S]+?)"+default_option.close_tag
        };

        const regexp = new RegExp([
            tag_replace.evaluate,
            tag_replace.interpolate
        ].join("|")+"|$", "g");

        let source = "__p += '";
        let index = 0;

        const escapes = {
            '\n': 'n',
            '\r': 'r',
            "'": "'",
            '\\': '\\',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
        };

        const escaper = /\\|'|\r|\n|\u2028|\u2029/g;

        const escapeChar = function (match) {

            return '\\' + escapes[match];

        };

        temp.replace(regexp, function (match, evaluate, interpolate, offset) {

            source += temp.slice(index, offset).replace(escaper, escapeChar);

            index = offset+match.length;

            if (evaluate) {

                source += "';\n"+evaluate+"\n__p += '";

            }

            if (interpolate) {

                source += "'+\n((__t=("+interpolate+")) == null?'':__t)+\n'";

            }

            return match;

        });

        const sourceData = reduce(function (total, vv, kk) {

            return total+"var "+toString(kk)+" = "+(isJson(vv)
                ?parseString(vv)
                :vv)+";\n";

        }, "", rawData);

        source += "';\n";

        source = "var __t,__p='';" + sourceData+source + " return __p;\n";

        try {

            const render = new Function('obj', source);

            return render.call(this, rawData, template);

        } catch (error) {

            if (default_option.throwError) {

                throw new Error(error);

            }

            return "";

        }

    }, [
        templateString,
        data,
        option
    ], two);

}

/**
 * Syntax cleanup
 *
 * @since 1.0.1
 * @category String
 * @param {string} data Template string
 * @param {any=} option The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 *  syntaxCleanup("<!- test !>", {"test": 11})
 *=>'11'
 */
function syntaxCleanup (data, option) {

    const str_split = data.split("");
    const openSplit = option.open_tag.split("");

    const closeSplit = option.close_tag.split("");

    let commentCounter = 0;

    let errorMessage = "";

    if (option.open_tag.length <= one) {

        errorMessage = "Open tag must greater or equal to two";

        return data;

    }

    if (option.close_tag.length <= one) {

        errorMessage = "Close tag must greater or equal to two";

        return data;

    }

    if (option.throwError && errorMessage !=="") {

        throw new Error(errorMessage);

    }

    return reduce(function (total, vv, kk) {

        if (kk>one) {

            if (str_split[kk-two]===openSplit[zero] && str_split[kk-one] === openSplit[one]) {

                if (commentCounter>zero) {

                    commentCounter += one;

                }
                if (vv === "=") {

                    if (commentCounter===zero) {

                        return total+vv+" ";

                    }

                }
                if (vv === "#") {

                    commentCounter += one;
                    if (commentCounter>zero) {

                        return total.replace(new RegExp(option.open_tag+"$", "g"), "");

                    }

                }
                if (vv !== " ") {

                    if (commentCounter===zero) {

                        return total+" "+vv;

                    }

                }

            }

            if (str_split[kk-two]===closeSplit[zero] && str_split[kk-one] === closeSplit[one] && commentCounter>zero) {

                commentCounter -= one;

            }

            if (commentCounter>zero) {

                return total;

            }

        }

        return total+vv;

    }, "", str_split);

}
export default template;

