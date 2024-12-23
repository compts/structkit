const getTypeof = require('./getTypeof');

const has = require('./has');

const count = require('./count');

const each = require('./each');

const indexOfExist = require('./indexOfExist');

const where = require('./where');

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
        each(objectValue, function (ak, av) {

            if (isValueAFunction) {

                if (value(ak, av)) {

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

        each(objectValue, function (ak, av) {

            if (isValueAFunction) {

                if (value(ak, av)) {

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
module.exports=remove;

