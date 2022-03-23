import getTypeof from './getTypeof';
import count from './count';
import indexOf from './indexOf';


/**
 * Shuffle
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The second number in an addition.
 * @param {number} value The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * shuffle([1,2,3])
 *=>[2,3,1]
 */
function shuffle (objectValue) {

    const emptyDefaultValue=0;
    const onceDefaultValue=1;
    const output=objectValue;
    const valueType=[
        "array",
        "json"
    ];

    if (indexOf(valueType, getTypeof(objectValue))>-onceDefaultValue) {

        const counts=count(objectValue)-onceDefaultValue;
        let randomIndex=emptyDefaultValue;
        let temporaryValue=null;

        for (let currentIndex=counts; currentIndex>emptyDefaultValue;) {

            randomIndex = Math.floor(Math.random() * currentIndex);

            if (getTypeof(objectValue)==="array") {

                temporaryValue = output[currentIndex];
                output[currentIndex]=output[randomIndex];
                output[randomIndex] = temporaryValue;

            }

            currentIndex -= onceDefaultValue;

        }

    }

    return output;

}
export default shuffle;

