import count from '../function/count';

import getTypeof from '../function/getTypeof';

import each from '../function/each';

import empty from '../function/empty';

import isExact from '../function/isExact';

import isExactbyRegExp from '../function/isExactbyRegExp';

import has from '../function/has';

import append from '../function/append';

/**
 * Where Loop Execution
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} jsn The second number in an addition.
 * @param {object} whr The second number in an addition.
 * @param {function} func The second number in an addition.
 * @param {boolean} isExist The second number in an addition.
 * @param {string} types The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * whereLoopExecution({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 */
function whereLoopExecution (jsn, whr, func, isExist, types) {

    const zero =0;

    const json_convertion = getTypeof(jsn) === "array"
        ? jsn
        : [jsn];
    const jsn_s= count(jsn, true) === zero
        ? json_convertion
        : jsn;
    const whr_s=whr||{};
    const variable=empty(jsn);
    let filterData = {};

    each(jsn_s, function (jk, jv) {

        if (getTypeof(jsn) === "array") {

            filterData = jv;

        }
        if (getTypeof(jsn) === "json") {

            filterData[jk]=jv;

        }

        if (types === "where") {

            if (isExact(whr_s, filterData, isExist)) {

                append(variable, jv, jk);
                if (has(func)) {

                    func(jv, jk);

                }

            }

        }
        if (types === "like") {

            if (isExactbyRegExp(whr_s, filterData)) {

                append(variable, jv, jk);
                if (has(func)) {

                    func(jv, jk);

                }

            }

        }

    });

    return variable;

}
export default whereLoopExecution;

