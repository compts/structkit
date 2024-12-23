import getTypeof from './getTypeof.js';

import count from './count.js';

import clone from './clone.js';

import first from './first.js';

import indexOf from './indexOf.js';

import random from './random.js';

import removeFromKey from './removeFromKey.js';

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
export default shuffle;

