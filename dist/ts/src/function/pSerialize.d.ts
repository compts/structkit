export default pSerialize;
/**
 * Create a serialize data if you are coming to php
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {string} Returns number for subtracted value
 * @example
 *
 * pSerialize(["22s"])
 * // => 'a:1:{i:0;s:3:"22s";}'
 */
declare function pSerialize(value: any): string;
