const getTypeof = require('./getTypeof');

const count = require('./count');
const clone = require('./clone');
const first = require('./first');

const indexOf = require('./indexOf');
const random = require('./random');
const removeFromKey = require('./removeFromKey');

/**
 * Shuffle data in array
 *
 * @since 1.0.1
 * @category Array
 * @param {any} objectValue Array argmuments
 * @returns {any[]} Returns the total.
 * @example
 *
 * shuffle([1,2,3])
 *=>[2,3,1]
 */
function shuffle (objectValue) {

    const emptyDefaultValue=0;
    const onceDefaultValue=1;
    const output=[];
    let rawObjectValue = clone(objectValue);
    const valueType=[
        "array",
        "json"
    ];

    if (indexOf(valueType, getTypeof(objectValue))>-onceDefaultValue) {

        const counts=count(objectValue)-onceDefaultValue;

        for (let currentIndex=counts; currentIndex>=emptyDefaultValue;) {

            const rowValue = random(rawObjectValue);

            rawObjectValue = clone(removeFromKey(rawObjectValue, indexOf(rawObjectValue, first(rowValue))));
            output.push(first(rowValue));
            currentIndex -= onceDefaultValue;

        }

    }

    return output;

}
module.exports=shuffle;

