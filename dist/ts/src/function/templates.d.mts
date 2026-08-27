export default templates;
/**
 * Template value
 *
 * @since 1.0.1
 * @category String
 * @param {string} templateString Template string
 * @param {any} data Parameter to replace
 * @param {any=} option Control of how are interpolated.
 * @returns {string} Returns the total.
 * @example
 *
 *  template("<!= test !>", {"test": 11})
 *=>'11'
 */
declare function templates(templateString: string, data: any, option?: any | undefined): string;
