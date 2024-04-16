import ConditionStatement from '../core/conditionStatement';

import has from './has';

/**
 * Decrement value
 *
 * @since 1.4.8
 * @category Math
 * @param {any} value Value you want to convert in array
 * @param {any=} default_value Value you want to convert in array
 * @returns {number} Return in number.
 * @example
 *
 * dec(1)
 *=>0
 */
function eq (value, default_value) {

    const cond = new ConditionStatement("eq", value);

    if (has(default_value)) {

        return cond.valueOfStatement(default_value);

    }

    return cond.valueOfStatement;

}
export default eq;

