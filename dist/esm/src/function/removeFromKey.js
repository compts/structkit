import getTypeof from './getTypeof.js';

import has from './has.js';

import each from './each.js';

/**
 * Remove data in either JSON or Array using key or woth value, a revise logic
 *
 * @since 1.4.85
 * @category Collection
 * @param {any} objectValue Json or array
 * @param {any} value if objectValue, json is must be object or array index you want to remove
 * @returns {any[]} Returns the total.
 * @example
 *
 * removeFromKey([1,2,3],0 )
 *=>[2, 3]
 */
function removeFromKey (objectValue, value) {

    const type_js=getTypeof(objectValue);
    let reslt =null;

    if (type_js === "array") {

        reslt=[];
        each(objectValue, function (ak, av) {

            if (parseInt(ak) !== value) {

                reslt.push(av);

            }

        });

        return reslt;

    }

    if (type_js === "json") {

        reslt={};

        each(objectValue, function (ak, av) {

            if (has(objectValue, ak) === false) {

                reslt[ak]=av;

            }

        });

        return reslt;

    }

    return [];

}
export default removeFromKey;

