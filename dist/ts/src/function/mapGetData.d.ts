export default mapGetData;
/**
 * A Function to map the data either an array or an object using getData function.
 *
 * @since 1.3.1
 * @category Collection
 * @param {string} valueFormat Key look up format
 * @param {any[]} objectValue Json in array format
 * @returns {any[]} Return array or object.
 * @example
 *
 * mapGetData("Asd", [{"Asd":1}])
 *=>[1]
 */
declare function mapGetData(valueFormat: string, objectValue: any[]): any[];
