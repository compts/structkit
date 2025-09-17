const varExtend = require('./varExtend');

const isJson = require('./isJson');

const parseString = require('./parseString');

const reduce = require('./reduce');

const toString = require("./toString");
const {one, two, zero} = require("../core/defaultValue");


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
 *  templateValue("<!- test !>", {"test": 11})
 *=>'11'
 */
function templateValue (templateString, data, option) {


    const default_option = varExtend({
        "close_tag": "!>",
        "open_tag": "<!",
        "trowError": false
    }, option);

    const temp = syntaxCleanup(templateString);


    const tag_replace={
        "comment": default_option.open_tag+"#([\\s\\S]*?)"+default_option.close_tag,
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

    const sourceData = reduce("", data, function (total, vv, kk) {

        return total+"var "+toString(kk)+" = "+(isJson(vv)
            ?parseString(vv)
            :vv)+";\n";

    });

    source += "';\n";


    source = "var __t,__p='';" + sourceData+source + " return __p;\n";


    try {

        const render = new Function('obj', source);

        return render.call(this, data, templateValue);

    } catch (error) {

        if (default_option.trowError) {

            throw new Error(error);


        }

        return "";

    }


}

/**
 * Syntax cleanup
 *
 * @since 1.0.1
 * @category String
 * @param {string} data Template string
 * @returns {string} Returns the total.
 * @example
 *
 *  templateValue("<!- test !>", {"test": 11})
 *=>'11'
 */
function syntaxCleanup (data) {

    const str_split = data.split("");

    let commentCounter = 0;


    return reduce("", str_split, function (total, vv, kk) {


        if (kk>one) {

            if (str_split[kk-two]==="<" && str_split[kk-one] === "!") {

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

                        return total.replace(/<!$/g, "");

                    }

                }
                if (vv !== " ") {


                    if (commentCounter===zero) {

                        return total+" "+vv;

                    }

                }

            }

            if (str_split[kk-two]==="!" && str_split[kk-one] === ">" && commentCounter>zero) {

                commentCounter -= one;

            }

            if (commentCounter>zero) {

                return total;

            }

        }

        return total+vv;

    });

}
module.exports=templateValue;
