export default getData;
/**
 * Get Data in array or json using string to search the data either by its key or index
 *
 * @since 1.0.1
 * @category Collection
 * @param {any=} split_str Search key or index.
 * @param {any=} objectValue Either Json or Array data.
 * @param {any=} isStrict to check if delimiter are match in counter, default value is false.
 * @returns {any} Returns the total.
 * @example
 *
 * getData("s", {"s":1})
 *=> 1
 * @example
 * getData("a:a",{"a":{"a":2},"b":{"a":3}})
 *=> {a: 2}
 */
declare function getData(split_str?: any | undefined, objectValue?: any | undefined, isStrict?: any | undefined): any;
