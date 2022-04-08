import has from './has';

import each from './each';

import getJSONVariable from './getJSONVariable';

import getTypeof from './getTypeof';

import append from './append';

/**
 * Filter
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {any} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * filter([1,2],(key,value)=>{
 *
 * })
 *
 */
function filter (objectValue, func) {

    let jsn_var=getJSONVariable(objectValue);
    const jsn_type=getTypeof(objectValue);

    each(objectValue, function (key, value) {

        if (has(func)) {

            if (func(key, value)===true) {

                if ((/(json|array)/g).test(jsn_type)) {

                    append(jsn_var, value, key);

                } else {

                    jsn_var=value;

                }

            }

        }

    });

    return jsn_var;

}
export default filter;

