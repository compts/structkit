import getTypeof from './getTypeof';
import has from './has';
import count from './count';
import each from './each';
import indexOf from './indexOf';
import where from './where';


/**
 * Remove
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {number} value The second number in an addition.
 * @param {number} value2 The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * remove([1,2,3],1 )
 *=>[2, 3]
 */
function remove (objectValue, value, value2) {

    const emptyDefaultValue=0;
    const type_js=getTypeof(objectValue);
    let reslt =null;

    const isValueAFunction = getTypeof(value)==="function";

    if (type_js==="array") {

        const lastRow = has(value2)
            ?value2
            :count(objectValue);

        reslt=[];
        each(objectValue, function (ak, av) {

            if (isValueAFunction) {

                if (value(ak, av)) {

                    reslt.push(av);

                }

            } else {

                if (ak > value && ak < lastRow) {

                    reslt.push(av);

                }

            }

        });

        return reslt;

    }

    if (type_js==="json") {

        reslt={};
        const jsn_vw=[];

        each(objectValue, function () {

            where(objectValue, value, function (jk) {

                jsn_vw.push(jk);

            });

        });

        each(objectValue, function (ak, av) {

            if (indexOf(jsn_vw, ak)<emptyDefaultValue) {

                reslt[ak]=av;

            }

        });

        return reslt;

    }

    return [];

}
export default remove;

