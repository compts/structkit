/**
 * Get unique value id
 *
 * @since 1.0.1
 * @returns {string} Get Unique Key.
 * @example
 *
 * getUniq()
 * => x2sf2
 */
function getUniq () {

    const defaultRandomValue=2;
    const defaultSubstrValue=36;
    const str_rand1=Math
        .random()
        .toString(defaultSubstrValue)
        .substr(defaultRandomValue)+Math.random()
        .toString(defaultSubstrValue)
        .substr(defaultRandomValue);

    return str_rand1;

}
export default getUniq;

