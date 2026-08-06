import reduce from './reduce.mjs';

import last from './last.mjs';

import {schemaSplitData} from '../core/baseGetData.mjs';

import isEmpty from './isEmpty.mjs';

import {getTypeofInternal} from '../core/getTypeOf.mjs';

import getData from './getData.mjs';

import append from './append.mjs';

import toArray from './toArray.mjs';

import each from './each.mjs';

import curryArg from '../core/curryArg.mjs';

import {two} from '../variable/defaultValue.mjs';

/**
 * A Function to pick only the data that you want to get from the array or json using a key format.
 *
 * @since 1.4.9
 * @category Collection
 * @param {string} valueFormat Key look up format
 * @param {any|any[]} objectValue Json in array format
 * @param {boolean=} isStrict to check if delimiter are match in counter, default value is true.
 * @returns {any|any[]} Return array or object.
 * @example
 *
 * pickData("Asd", [{"Asd":1}])
 *=>[1]
 */
function pickData (valueFormat, objectValue) {

    return curryArg(function (rawValueFormat, rawObjectValue) {

        const typeObjectValue = getTypeofInternal(rawObjectValue);

        return reduce(function (total, value, key) {

            const rawbj = {};

            if (typeObjectValue === "json") {

                rawbj[key] = value;

            }

            each(toArray(rawValueFormat), function (formatVal) {

                const schemaSplit = schemaSplitData(formatVal);
                const validData = getData(schemaSplit, typeObjectValue === "json"
                    ?rawbj
                    :value, true);

                if (isEmpty(validData) === false) {

                    total = append(total, validData, last(schemaSplit));

                }

            });

            return total;

        }, typeObjectValue === "json"
            ?{}
            :[], rawObjectValue);

    }, [
        valueFormat,
        objectValue
    ], two);

}
export default pickData;

