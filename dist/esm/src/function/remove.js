import getTypeof from './getTypeof.js';

import has from './has.js';

import count from './count.js';

import each from './each.js';

import indexOfExist from './indexOfExist.js';

import where from './where.js';

/**
 * Remove data in either JSON or Array using key or woth value, a revise logic
 *
 * @since 1.4.85
 * @category Collection
 * @param {any} objectValue Json or array
 * @param {any} value if objectValue, json is must be object or array index you want to remove
 * @param {number=} value2 Last row in index
 * @returns {any[]} Returns the total.
 * @example
 *
 * remove([1,2,3],0 )
 *=>[2, 3]
 */
function remove (objectValue, value, value2) {

    const type_js=getTypeof(objectValue);
    let reslt =null;

    const isValueAFunction = getTypeof(value) === "function";

    if (type_js === "array") {

        const lastRow = has(value2)
            ?value2
            :count(objectValue);

        reslt=[];
        each(objectValue, function (av, ak) {

            if (isValueAFunction) {

                if (value(av, ak)) {

                    reslt.push(av);

                }

            } else {

                if (value === lastRow) {

                    if (parseInt(ak) !== value) {

                        reslt.push(av);

                    }

                } else {

                    if (parseInt(ak) > value && parseInt(ak) <= lastRow) {

                        reslt.push(av);

                    }

                }

            }

        });

        return reslt;

    }

    if (type_js === "json") {

        reslt={};
        const jsn_vw=[];

        each(objectValue, function () {

            where(objectValue, value, function (jk) {

                jsn_vw.push(jk);

            });

        });

        each(objectValue, function (av, ak) {

            if (isValueAFunction) {

                if (value(av, ak)) {

                    reslt[ak]=av;

                }

            } else {

                if (indexOfExist(jsn_vw, av) === false) {

                    reslt[ak]=av;

                }

            }

        });

        return reslt;

    }

    return [];

}
export default remove;

