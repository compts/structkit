const curryArg = require("../core/curryArg");
const baseReduce = require("../core/baseReduce");
const unique = require("./unique");
const {getTypeofInternal} = require('../core/getTypeOf');
const each = require('./each');

/**
 * To create a new array that is the union of all the arrays passed as arguments. The union will contain only unique values.
 *
 * @since 1.4.7
 * @category Collection
 * @param {...any?} arg First number
 * @returns {any[]} Returns true or false.
 * @example
 *
 * union([1,2,3,4,7],[1,2,3,4,5,6,7,8])
 * // => [1, 2, 3, 4, 7, 5, 6, 8]
 */
function union (...arg) {

    return curryArg(function (...rawValue) {


        return baseReduce([], rawValue, function (total, value) {

            if (getTypeofInternal(value) === "array") {

                each(value, function (valEach) {

                    total.push(valEach);

                });

            }

            return unique(total);

        });


    }, arg);

}
module.exports=union;

