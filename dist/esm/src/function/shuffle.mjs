import getTypeof from './getTypeof.mjs';

import count from './count.mjs';

import clone from './clone.mjs';

import first from './first.mjs';

import {zero, one} from '../variable/defaultValue.mjs';

import indexOf from './indexOf.mjs';

import random from './random.mjs';

import remove from './remove.mjs';

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

    if (indexOf(getTypeof(objectValue), valueType)>-one) {

        const counts=count(objectValue)-one;

        for (let currentIndex=counts; currentIndex>=zero;) {

            const rowValue = random(rawObjectValue);

            rawObjectValue = clone(remove(rawObjectValue, indexOf(first(rowValue), rawObjectValue)));
            output.push(first(rowValue));
            currentIndex -= one;

        }

    }

    return output;

}
export default shuffle;

