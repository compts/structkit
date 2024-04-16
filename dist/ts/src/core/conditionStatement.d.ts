export default statementAction;
/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Seq
 * @param {string} types The second number in an addition.
 * @param {any} initialValue The second number in an addition.
 * @returns {boolean|any} Returns the total.
 * @example
 *
 * dataNumberFormat(/(\d)/g, 0,1)
 *=> 1
 */
declare function statementAction(types: string, initialValue: any): boolean | any;
declare class statementAction {
    /**
     * Logic in convert string or number to valid number
     *
     * @since 1.4.8
     * @category Seq
     * @param {string} types The second number in an addition.
     * @param {any} initialValue The second number in an addition.
     * @returns {boolean|any} Returns the total.
     * @example
     *
     * dataNumberFormat(/(\d)/g, 0,1)
     *=> 1
     */
    constructor(types: string, initialValue: any);
    types: string;
    initialValue: any;
    valueOfStatement(value: any): boolean;
}
