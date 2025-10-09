const count = require('../function/count');
const getTypeof = require('../function/getTypeof');
const each = require('../function/each');
const empty = require('../function/empty');
const isEmpty = require('../function/isEmpty');
const isExact = require('../function/isExact');
const isExactbyRegExp = require('../function/isExactbyRegExp');
const has = require('../function/has');
const append = require('../function/append');
const {zero} = require("../variable/defaultValue");

/**
 * Where Loop Execution
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} whr Data for lookup
 * @param {object} jsn Json or array that you want to dissect
 * @param {function} func The second number in an addition.
 * @param {boolean} isExist The second number in an addition.
 * @param {string} types The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * whereLoopExecution({"s1":1},{"s1":1,"s2":1})
 *=>{"s1":1,"s2":1}
 */
function whereLoopExecution (whr, jsn, func, isExist, types) {


    const json_convertion = getTypeof(jsn) === "array"
        ? jsn
        : [jsn];
    const jsn_s= count(jsn, true) === zero
        ? json_convertion
        : jsn;
    const whr_s=whr||{};
    const variable=empty(jsn);
    let filterData = {};

    each(jsn_s, function (jv, jk, isContinueRef1) {

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

                    func(jv, jk, isContinueRef1);

                }

            }

        }
        if (types === "where_once") {

            if (isExact(whr_s, filterData, isExist)) {

                if (isEmpty(variable)) {

                    append(variable, jv, jk);
                    isContinueRef1.isContinue(false);


                }

                if (has(func)) {

                    func(jv, jk, isContinueRef1);

                }


            }

        }
        if (types === "like") {

            if (isExactbyRegExp(whr_s, filterData)) {

                append(variable, jv, jk);
                if (has(func)) {

                    func(jv, jk, isContinueRef1);

                }

            }

        }

    });

    return variable;

}
module.exports=whereLoopExecution;

