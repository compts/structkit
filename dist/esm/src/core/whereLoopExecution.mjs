import count from '../function/count.mjs';

import getTypeof from '../function/getTypeof.mjs';

import each from '../function/each.mjs';

import empty from '../function/empty.mjs';

import isExact from '../function/isExact.mjs';

import isEmpty from '../function/isEmpty.mjs';

import isExactbyRegExp from '../function/isExactbyRegExp.mjs';

import append from '../function/append.mjs';

import {zero} from '../variable/defaultValue.mjs';

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

        localGlobal.action = "lookup_execution";
        if (getTypeof(jsn) === "array") {

            filterData = jv;

        }
        if (getTypeof(jsn) === "json") {

            filterData[jk]=jv;

        }

        const whr_s=getTypeof(whr) === "function"
            ?whr(jv, jk, localGlobal)
            :whr||{};

        let validReturn = false;

        if (types === "where") {

            validReturn = isExact(whr_s, filterData);

            if (localGlobal.external_execution_from === 'not') {

                validReturn = isExact(whr_s, filterData) === localGlobal.is_true;

            }

        }

        if (types === "like") {

            validReturn = isExactbyRegExp(whr_s, filterData);

            if (localGlobal.external_execution_from === 'not') {

                validReturn = isExactbyRegExp(whr_s, filterData) === localGlobal.is_true;

            }

        }

        if (getTypeof(whr) === "function") {

            if (localGlobal.external_execution_from === '') {

                localGlobal.pass_value = validReturn && isEmpty(variable);

            } else {

                localGlobal.pass_value = validReturn;

            }

        } else {

            localGlobal.pass_value = validReturn;

        }
        if (localGlobal.pass_value) {

            append(variable, jv, jk);

        }

    });

    return variable;

}
export default whereLoopExecution;

