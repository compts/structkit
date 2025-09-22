const getTypeof = require('./getTypeof');

const count = require('./count');
const clone = require('./clone');
const first = require('./first');
const {zero, one} = require("../variable/defaultValue");
const indexOf = require('./indexOf');
const random = require('./random');
const removeFromKey = require('./removeFromKey');

/**
 * Shuffle data in array
 *
 * @since 1.0.1
 * @update 1.4.86
 * @category Array
 * @param {any[]} objectValue Array argmuments that you want to shuffle
 * @returns {any[]} Shuffle return value in array
 * @example
 *
 * shuffle([1,2,3])
 *=>[2,3,1]
 */
function shuffle (objectValue) {

    const output=[];
    let rawObjectValue = clone(objectValue);
    const valueType=[
        "array",
        "json"
    ];

    if (indexOf(valueType, getTypeof(objectValue))>-one) {

        const counts=count(objectValue)-one;

        for (let currentIndex=counts; currentIndex>=zero;) {

            const rowValue = random(rawObjectValue);

            rawObjectValue = clone(removeFromKey(rawObjectValue, indexOf(rawObjectValue, first(rowValue))));
            output.push(first(rowValue));
            currentIndex -= one;

        }

    }

    return output;

}
module.exports=shuffle;

