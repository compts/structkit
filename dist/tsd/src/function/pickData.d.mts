export default pickData;
/**
 * A Function to pick only the data that you want to get from the array or json using a key format.
 *
 * @since 1.4.9
 * @category Collection
 * @param {string} valueFormat Key look up format
 * @param {any|any[]} objectValue Json in array format
 * @param {boolean=} isStrict to check if delimiter are match in counter, default value is true.
 * @returns {any|any[]} Return array or object.
 * @example
 *
 * pickData("Asd", [{"Asd":1}])
 *=>[1]
 */
declare function pickData(valueFormat: string, objectValue: any | any[]): any | any[];
