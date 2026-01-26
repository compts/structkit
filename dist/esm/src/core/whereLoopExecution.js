import count from '../function/count.js';

import getTypeof from '../function/getTypeof.js';

import each from '../function/each.js';

import empty from '../function/empty.js';

import isExact from '../function/isExact.js';

import isEmpty from '../function/isEmpty.js';

import isExactbyRegExp from '../function/isExactbyRegExp.js';

import append from '../function/append.js';

import {zero} from '../variable/defaultValue.js';

/**
 * Where Loop Execution
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} whr Data for lookup
 * @param {object} jsn Json or array that you want to dissect
 * @param {boolean} isExist The second number in an addition.
 * @param {string} types The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * whereLoopExecution({"s1":1},{"s1":1,"s2":1})
 *=>{"s1":1,"s2":1}
 */
function whereLoopExecution (whr, jsn, isExist, types) {

    const json_convertion = getTypeof(jsn) === "array"
        ? jsn
        : [jsn];
    const jsn_s= count(jsn, true) === zero
        ? json_convertion
        : jsn;

    const variable=empty(jsn);
    let filterData = {};

    each(jsn_s, function (jv, jk, localGlobal) {

        if (getTypeof(jsn) === "array") {

            filterData = jv;

        }
        if (getTypeof(jsn) === "json") {

            filterData[jk]=jv;

        }

        localGlobal.action = "lookup_execution";
        const whr_s=getTypeof(whr) === "function"
            ?whr(jv, jk, localGlobal)
            :whr||{};

        if (types === "where") {

            localGlobal.pass_value = isExact(whr_s, filterData, isExist);
            if (localGlobal.pass_value) {

                if (getTypeof(whr) === "function") {

                    if (isEmpty(variable)) {

                        append(variable, jv, jk);
                        localGlobal.isContinue(false);

                    }

                } else {

                    append(variable, jv, jk);

                }

            }

        }
        // ? if (types === "where_once") {

        // ?     if (isExact(whr_s, filterData, isExist)) {

        // ?         if (isEmpty(variable)) {

        /*
         * ?             append(variable, jv, jk);
         * ?             isContinueRef1.isContinue(false);
         */

        // ?         }

        // ?     }

        // ? }
        if (types === "like") {

            localGlobal.pass_value = isExactbyRegExp(whr_s, filterData, isExist);

            if (localGlobal.pass_value) {

                append(variable, jv, jk);

            }

        }

    });

    return variable;

}
export default whereLoopExecution;

