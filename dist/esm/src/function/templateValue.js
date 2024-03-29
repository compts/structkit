import varExtend from './varExtend';

import getTypeof from './getTypeof';

import indexOf from './indexOf';

import parseString from './parseString';

import getData from './getData';

import has from './has';

import toString from './toString';

/**
 * Template Value
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

    const oneDefaultValue=1;

    templateString = templateValueInternal(toString(templateString), data);

    const default_option=varExtend({
        "escape": "<!-([\\s\\S]+?)!>",
        "evaluate": "<![^=-]([\\s\\S]+?)!>",
        "interpolate": "< != ([\\s\\S]+?)!>"
    }, option);

    const valueType=[
        "array",
        "json"
    ];

    const regexp = new RegExp([
        default_option.evaluate,
        default_option.interpolate,
        default_option.escape
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

    templateString.replace(regexp, function (match, evaluate, interpolate, escape, offset) {

        source += templateString.slice(index, offset).replace(escaper, escapeChar);
        index = offset+match.length;

        if (evaluate) {

            source += "';\n"+evaluate+"\n__p += '";

        }

        if (interpolate) {

            source += "'+\n((__t=("+interpolate+")) == null?'':__t)+\n'";

        }

        if (escape) {

            source += "'+\n((__t=("+interpolate+")) == null?'':__t)+\n'";

        }

        return match;

    });

    source += "';\n";

    source = "var __t,__p='',__j=[].join," +
        "print=function(){__p += __j.call(arguments,'');};\n" +
    source + " return __p;\n";

    try {

        let val_source = "";

        if (getTypeof(data) === "json") {

            for (const key in data) {

                if (has(data, key)) {

                    val_source += 'var '+key+' = '+(indexOf(valueType, getTypeof(data[key]))>-oneDefaultValue
                        ?parseString(data[key])
                        :'"'+data[key]+'"')+';';

                }

            }

        }

        const render = new Function('obj', '_', val_source+source);

        return render.call(this, data, templateValue);

    } catch (error) {

        console.log(error);
        error.source = source;
        throw error;

    }

}

/**
 * Template Value Internal
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} str_raw String from template you need interpolation
 * @param {string} reg Value you want to replace from template
 * @returns {string} Returns template from interpolation
 * @example
 *
 * templateValueInternal("","" )
 *=>'{}'
 */
function templateValueInternal (str_raw, reg) {

    const str=str_raw;
    let strs=str;

    try {

        try {

            const regs=new RegExp("[\\r\\t\\n\\s]{0,}<![-]\\s{0,}(.*?)\\s{0,}!>[\\r\\t\\n\\s]{0,}", "g");

            strs=strs.replace(regs, function (word, mes1) {

                const strs_perd=mes1.replace(".", ":");
                const gtdata=getData(reg, strs_perd);

                return getTypeof(gtdata) === "json"
                    ?""
                    :gtdata;

            });

        } catch (error) {

            console.log(error);

        }

    } catch (error) {

        console.log(error);

    }

    const strs_finl=strs;

    return strs_finl;

}

export default templateValue;

