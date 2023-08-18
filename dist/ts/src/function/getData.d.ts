export default getData;
/**
 * Get Data in array or json using string to search the data
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Either Json or Array data.
 * @param {any} split_str Search key or index.
 * @returns {any} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=>1
 * getData({"a":{"a":2},"b":{"a":3}},"a:a")
 *=> {a: 2}
 */
declare function getData(objectValue: any, split_str: any): any;
