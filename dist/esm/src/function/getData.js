import has from './has';
import each from './each';


/**
 * Get Data
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {any} split_str The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=>1
 */
function getData (objectValue, split_str) {

    const spl_len=split_str.split(":");
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
export {getData};

