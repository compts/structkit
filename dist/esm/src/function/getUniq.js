/**
 * Generate unique value id
 *
 * @since 1.0.1
 * @param {any=} option if value not exist, this value will be return
 * @returns {string} Get Unique Key.
 * @example
 *
 * getUniq()
 * => x2sf2
 */
function getUniq (option) {

    const optionValue = option||"default";

    if (optionValue === "default") {

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

    return "";

}
export default getUniq;

