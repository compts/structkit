import getTypeof from './getTypeof.js';

import curryArg from '../core/curryArg.js';

import has from './has.js';

import each from './each.js';

import count from './count.js';

import varExtend from './varExtend.js';

import {two, one, zero} from '../core/defaultValue.js';

/**
 * Data String from JSON object
 *
 * @since 1.0.1
 * @category Collection
 * @param {string} str Object you want to convert to JSON string
 * @returns {string} Return JSON string
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function datastring (str) {

    let data_s="";

    if (typeof str === "string") {

        if (str.indexOf("'")) {

            data_s='&quot;'+str+'&quot;';

        } else if (str.indexOf('"')) {

            data_s='&quot;'+str+'&quot;';

        } else {

            data_s=str;

        }

    } else {

        data_s=str;

    }

    return data_s;

}

/**
 * Parse String
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} rawCount The second number in an addition.
 * @param {any} rawConfig The second number in an addition.
 * @param {any} rawValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function parseStringCore (rawCount, rawConfig, rawValue) {

    return curryArg(function (refCount, refConfig, value) {

        let str="";
        let str_strt="";
        let str_end="";
        let inc=0;
        const incrementDefaultValue=1;
        let inc_main=null;

        if (has(value)) {

            if (getTypeof(value) === "json") {

                str_strt="{";
                str_end="}";

                each(value, function (_value, _key) {

                    inc_main=inc<count(value)-incrementDefaultValue
                        ?","
                        :"";

                    if (typeof _value === "object"&&_value !== null) {

                        str += datastring(_key)+":"+ parseStringCore(refCount+one, refConfig, _value) +""+inc_main;

                    } else {

                        str += datastring(_key)+":"+datastring(_value)+""+inc_main;

                    }

                    inc += incrementDefaultValue;

                });

            }
            if (getTypeof(value) === "array") {

                str_strt="[";
                str_end="]";

                each(value, function (_value) {

                    inc_main=inc<count(value)-incrementDefaultValue
                        ?","
                        :"";

                    if (typeof _value === "object") {

                        str += parseStringCore(refCount+one, refConfig, _value) +""+inc_main;

                    } else {

                        str += datastring(_value)+""+inc_main;

                    }

                    inc += incrementDefaultValue;

                });

            }

        }

        return (str_strt+str+str_end).replace(/[\r\t\n\s]{1,}/g, "&nbsp;").replace(/(&quot;)/gi, '"');

    }, [
        rawCount,
        rawConfig,
        rawValue
    ], two);

}

/**
 * Parse from JSON object to String
 *
 * @since 1.4.86
 * @category
 * @param {any} value The Object that you want to convert to string in json format.
 * @param {any=} config Option you want to set in this function.
 * @returns {string} Returns the string in json format.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function parseString (value, config) {

    const defaultConfig = varExtend(config, {});

    const data = parseStringCore(zero, defaultConfig, value);

    return data;

}

export default parseString;

