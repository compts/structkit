const getTypeof = require('./getTypeof');


/**
 * Async replace
 *
 * @since 1.3.1
 * @category Seq
 * @param {any} value The first number in an addition.
 * @param {any} search The first number in an addition.
 * @param {any} toReplace The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * isEmpty('')
 * // => true
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

