const has = require('./has');

const each = require('./each');


/**
 * Get Data
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Json or Array data.
 * @param {any} split_str Search key or index.
 * @returns {any} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=>1
 */
function getData (objectValue, split_str) {

    const split_strReplace= split_str.replace(/([.]{1,})/g, ":");
    const spl_len=split_strReplace.split(":");
    const spl=[];
    let jsn_total={};

    if (!has(objectValue)) {

        return "";

    }

    each(spl_len, function (key, value) {

        spl.push(value);

    });

    each(spl, function (key, value) {

        try {

            if (has(objectValue, value)) {

                if ((/^\s+$/).test(objectValue[value])===false) {

                    jsn_total=objectValue[value];

                }

            } else {

                if (has(jsn_total, value)) {

                    jsn_total=jsn_total[value];

                }

            }

        } catch (error) {

            console.log(error);

        }

    });

    return jsn_total;

}
module.exports=getData;
