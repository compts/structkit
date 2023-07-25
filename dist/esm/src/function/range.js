import has from './has';

/**
 * Generate array of data from specific limit or where the index to start
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} maxValue Max value you to generate in array
 * @param {number=} minValue Min value you to generate in array
 * @returns {string|number} Return in array.
 * @example
 *
 * range(10)
 *=>[1,2,3,4,5,6,7,8,9,10]
 */
function range (maxValue, minValue) {

    const emptyDefaultValue=0;
    const tenDefaultValue=10;
    const incrementDefaultValue=1;
    const minValueRef=has(minValue)
        ?minValue
        :emptyDefaultValue;
    const maxValueRef=has(maxValue)
        ?maxValue
        :tenDefaultValue;
    const output=[];

    for (let inc=minValueRef; inc<=maxValueRef;) {

        output.push(inc);
        inc+=incrementDefaultValue;

    }

    return output;

}
export default range;

