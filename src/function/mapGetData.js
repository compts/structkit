const reduce = require('./reduce');
const isEmpty = require('./isEmpty');
const {getTypeofInternal} = require('../core/getTypeOf');
const getData = require('./getData');
const append = require('./append');
const curryArg = require("../core/curryArg");
const {two} = require("../variable/defaultValue");


/**
 * A Function to map the data either an array or an object using getData function.
 *
 * @since 1.3.1
 * @category Collection
 * @param {string} valueFormat Key look up format
 * @param {any[]} objectValue Json in array format
 * @param {any=} isStrict to check if delimiter are match in counter, default value is true.
 * @returns {any[]} Return array or object.
 * @example
 *
 * mapGetData("Asd", [{"Asd":1}])
 *=>[1]
 */
function mapGetData (valueFormat, objectValue, isStrict) {


    return curryArg(function (rawValueFormat, rawObjectValue, rawIsStrict) {

        const refIsStrict = getTypeofInternal(rawIsStrict) === "undefind"
            ? true
            :rawIsStrict;

        const typeObjectValue = getTypeofInternal(rawObjectValue);

        return reduce(function (total, value, key) {

            const rawbj = {};

            if (typeObjectValue === "json") {

                rawbj[key] = value;

            }


            const validData = getData(rawValueFormat, typeObjectValue === "json"
                ?rawbj
                :value, refIsStrict);

            if (isEmpty(validData) === false) {

                total = append(total, validData);

            }

            return total;

        }, [], objectValue);

    }, [
        valueFormat,
        objectValue,
        isStrict
    ], two);


}
module.exports=mapGetData;

