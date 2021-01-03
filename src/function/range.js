import has from './has';

/**
 * Range
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} maxValue The second number in an addition.
 * @param {number} minValue The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * random([1,2,3],1,2 )
 *=>'{}'
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
