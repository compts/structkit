export default getKey;
/**
 * Get key Array or JSON
 *
 * @since 1.0.1
 * @category String
 * @param {any} objectValue Either JSON or Array type
 * @returns {string} Returns it respective key or index
 * @example
 *
 * getKey({"s":1})
 * => s
 */
declare function getKey(objectValue: any): string;
