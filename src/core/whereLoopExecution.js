const count = require('../function/count');

const getTypeof = require('../function/getTypeof');

const each = require('../function/each');

const getEmptyVariable = require('../function/getEmptyVariable');

const isExact = require('../function/isExact');

const isExactbyRegExp = require('../function/isExactbyRegExp');

const has = require('../function/has');

const append = require('../function/append');

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
    const jsn_s= count(jsn, true) ===zero
        ? json_convertion
        : jsn;
    const whr_s=whr||{};
    const variable=getEmptyVariable(jsn);
    let filterData = {};

    each(jsn_s, function (jk, jv) {

        if (getTypeof(jsn) === "array") {


            filterData = jv;

        }
        if (getTypeof(jsn)==="json") {

            filterData[jk]=jv;

        }

        if (types === "where") {

            if (isExact(filterData, whr_s, isExist)) {

                append(variable, jv, jk);
                if (has(func)) {

                    func(jv, jk);

                }

            }

        }
        if (types === "like") {

            if (isExactbyRegExp(filterData, whr_s)) {

                append(variable, jv, jk);
                if (has(func)) {

                    func(jv, jk);

                }

            }

        }

    });

    return variable;

}
module.exports=whereLoopExecution;

