export default pUnSerialize;
/**
 * Create a serialize data if you are coming to php
 *
 * @since 1.4.874
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {string} Returns number for subtracted value
 * @example
 *
 * pUnSerialize('s:6:"Violet";')
 * // => 'Violet'
 */
declare function pUnSerialize(value: any): string;
