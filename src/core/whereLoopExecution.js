const count = require('../function/count');
const getTypeof = require('../function/getTypeof');
const each = require('../function/each');
const empty = require('../function/empty');
const isExact = require('../function/isExact');
const isEmpty = require("../function/isEmpty");
const isExactbyRegExp = require('../function/isExactbyRegExp');
const append = require('../function/append');
const {zero} = require("../variable/defaultValue");

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

            validReturn = isExact(whr_s, filterData, isExist);

        }

        if (types === "like") {

            validReturn = isExactbyRegExp(whr_s, filterData);

        }

        if (getTypeof(whr) === "function") {

            localGlobal.pass_value = validReturn && isEmpty(variable);

        } else {

            localGlobal.pass_value = validReturn;

        }

        if (localGlobal.pass_value) {

            append(variable, jv, jk);

        }

    });

    return variable;

}
module.exports=whereLoopExecution;

