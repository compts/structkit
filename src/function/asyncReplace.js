const getTypeof = require('./getTypeof');


/**
 * Async replace
 *
 * @since 1.3.1
 * @category Seq
 * @param {any} value String data
 * @param {any} search Regexp or string to look for match
 * @param {any} toReplace Replace value.
 * @returns {Promise<string>} String
 * @example
 *
 * asyncReplace("asd",/s/g,"@")
 * // => Promise{<fulfilled>: 'a@d'}
 */
function asyncReplace (value, search, toReplace) {

    try {

        if (getTypeof(toReplace) === "function") {

            const values = [];

            String.prototype.replace.call(value, search, function (...arg) {

                values.push(toReplace(...arg));

                return "";

            });

            return Promise.all(values).then(function (resolvedValues) {

                return String.prototype.replace.call(value, search, function () {

                    return resolvedValues.shift();

                });

            });

        }

        return Promise.resolve(String.prototype.replace.call(value, search, toReplace));


    } catch (error) {

        return Promise.reject(error);

    }

}
module.exports=asyncReplace;

