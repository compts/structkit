/**
 * Get Data in array or json using string to search the data either by its key or index
 *
 * @since 1.4.87
 * @category Collection
 * @param {any=} data Either Json or Array data.
 * @returns {any} Returns the total.
 * @example
 *
 * schemaSplitData("s")
 *=> ["s"]
 * @example
 * schemaSplitData("a:a")
 *=> ["a","a"]
 */
export function schemaSplitData(data?: any | undefined): any;
