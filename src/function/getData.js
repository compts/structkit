const has = require('./has');
const each = require('./each');
const empty = require('./empty');
const isEmpty = require('./isEmpty');
const curryArg = require("../core/curryArg");
const inc = require("./inc");
const {schemaSplitData} = require("../core/baseGetData");

/**
 * Get Data in array or json using string to search the data either by its key or index
 *
 * @since 1.0.1
 * @category Collection
 * @param {any=} objectValue Either Json or Array data.
 * @param {any=} split_str Search key or index.
 * @param {any=} isStrict to check if delimiter are match in counter, default value is false.
 * @returns {any} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=> 1
 * @example
 * getData({"a":{"a":2},"b":{"a":3}},"a:a")
 *=> {a: 2}
 */
function getData (objectValue, split_str, isStrict) {

    const refIsStrict = isStrict || false;

    if (!has(objectValue) || isEmpty(objectValue)) {

        return empty(objectValue);

    }

    return curryArg(function (rawObjectValue, rawSplit_str) {

        const spl= schemaSplitData(rawSplit_str);

        let jsn_total={};
        let counter = 0;


        each(spl, function (value) {

            if (has(rawObjectValue, value)) {

                if ((/^\s+$/).test(rawObjectValue[value]) === false) {

                    jsn_total=rawObjectValue[value];
                    counter=inc(counter);

                }

            } else {

                if (has(jsn_total, value)) {

                    jsn_total=jsn_total[value];
                    counter=inc(counter);

                }

            }

        });

        if (refIsStrict && spl.length !== counter) {

            return spl.length === counter
                ?jsn_total
                :null;

        }

        return jsn_total;

    }, [
        objectValue,
        split_str
    ]);

}
module.exports=getData;
