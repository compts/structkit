export default mapGetData;
/**
 * A Function to map the data either an array or an object using getData function.
 *
 * @since 1.3.1
 * @category Array
 * @param {any[]} objectValue Json in array format
 * @param {string} valueFormat Key look up format
 * @returns {any[]} Return array or object.
 * @example
 *
 * mapGetData([{"Asd":1}],"Asd")
 *=>[1]
 */
declare function mapGetData(objectValue: any[], valueFormat: string): any[];
