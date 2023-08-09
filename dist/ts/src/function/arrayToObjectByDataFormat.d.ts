export default arrayToObjectByDataFormat;
/**
 * Array To Object By DataFormat
 *
 * @since 1.3.1
 * @category Seq
 * @param {any[]} objectValue Json in array format
 * @param {string} valueFormat Key look up format
 * @returns {any[]} Return array or object.
 * @example
 *
 * arrayToObjectByDataFormat([{"Asd":1}],"Asd")
 *=>[1]
 */
declare function arrayToObjectByDataFormat(objectValue: any[], valueFormat: string): any[];
