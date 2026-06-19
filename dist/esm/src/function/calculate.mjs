import count from './count.mjs';

import getKey from './getKey.mjs';

import getTypeof from './getTypeof.mjs';

import toArray from './toArray.mjs';

import {zero, one, two, three, oneHundred} from '../variable/defaultValue.mjs';

import curryArg from '../core/curryArg.mjs';

import add from './add.mjs';

import divide from './divide.mjs';

import multiply from './multiply.mjs';

import subtract from './subtract.mjs';

import indexOfExist from './indexOfExist.mjs';

import has from './has.mjs';

import clone from './clone.mjs';

import flatten from './flatten.mjs';

const operationType = [
    [
        "^",
        "**"
    ],
    [
        "x",
        "*",
        "/"
    ],
    [
        "+",
        "-"
    ]
];

/**
 * Logic in convert string to compute, similar on how the calculator works, using pemdas concept and also support for factorial, percentage, absolute value and square root or any algebraic expression that can be represented in string. It also support for variable in formula, you just need to fill the variable with value in the second argument as json.
 *
 * @since 1.4.8
 * @category Math
 * @param {string} formula Formula you want to execution, it follows the idea of algebraic expression concept
 * @param {any=} args Object argument that to fill in variable define at algbraic expression
 * @returns {number|any} Returns the total.
 * @example
 *
 * calculate('1+1')
 *=> 2
 * calculate('1+as',{as:1})
 *=> 2
 */
function calculate (formula, args) {

    return curryArg(function (rawFormula, rawArgs) {

        rawFormula = algbraicExpr(rawFormula);

        if (getTypeof(rawArgs) === "json") {

            const argsKey = new RegExp("\\b("+toArray(getKey(rawArgs)).join("|")+")\\b", "g");

            rawFormula = rawFormula.replace(argsKey, function (mm, m1) {

                return rawArgs[m1];

            });

        }

        const strFormula = rawFormula.replace(/\((.*?)\)/g, function (mm, m1) {

            return init_group(m1);

        });

        return Number(init_group(strFormula));

    }, [
        formula,
        args
    ]);

}

/**
 * Before executing, need to make a grouping
 *
 * @since 1.4.9
 * @category Math
 * @param {string} formula The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * init_group("1+1")
 *=> 2
 */
function init_group (formula) {

    const regexpNumber = /([\d]+!|[\d.%]+|[//*]{2}|[//*\-+\x^]|\|[\d]+\|)/g;
    const matches = formula.match(regexpNumber);

    if (matches[zero] === "-") {

        matches.splice(zero, two, "-"+matches[one]);

    }

    const flattenOps = flatten(operationType);

    for (let ii = one; ii< matches.length; ii +=one) {

        if (has(matches, ii+one)) {

            if (indexOfExist(matches[ii], flattenOps)) {

                if (matches[ii+one] === "-") {

                    matches.splice(ii+one, two, "-"+matches[ii+two]);

                }

            }

        }

    }

    if (count(matches) === one) {

        return convert(matches[zero]);

    }

    if (count(matches) < three) {

        throw new Error("Invalid formula");

    }

    return compute(matches, zero);

}

/**
 * Build computational format
 *
 * @since 1.4.9
 * @category Math
 * @param {string[]} formula The second number in an addition.
 * @param {number} priority The priority sequence
 * @returns {number} Returns the total.
 * @example
 *
 * compute("1+1")
 *=> 2
 */
function compute (formula, priority) {

    let counter = one;
    let counterOne = zero;

    let result = zero;
    const execPriority = operationType[priority];
    const formulaLen = Math.ceil(count(formula)/three);
    const cloneFormula = clone(formula);

    for (let ii = zero; ii< formulaLen; ii +=one) {

        if (has(cloneFormula, counter+one) ===false) {

            throw new Error("Invalid formula");

        }

        if (indexOfExist(cloneFormula[counter], execPriority)) {

            result = process(convert(cloneFormula[counter-one]), cloneFormula[counter], convert(cloneFormula[counter+one]));

            cloneFormula.splice(counterOne*two, three, result);

        } else {

            counter += two;
            counterOne +=one;

        }

    }

    if (cloneFormula.length === one) {

        return cloneFormula[zero];

    }

    return operationType.length-one === priority
        ? zero
        : compute(cloneFormula, priority+one);

}

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Math
 * @param {number} a1 The second number in an addition.
 * @param {string} operator The second number in an addition.
 * @param {number} b1 The second number in an addition.
 * @returns {number|any} Returns the total.
 * @example
 *
 * process(1,+, 1)
 *=> 1
 */
function process (a1, operator, b1) {

    switch (operator) {

    case '+':
        return add(Number(a1), Number(b1));
    case '-':
        return subtract(Number(a1), Number(b1));
    case 'x':
    case '*':
        return multiply(Number(a1), Number(b1));
    case '/':
        return divide(Number(a1), Number(b1));
    case '%':
        return Number(a1) % Number(b1);
    case '^':
    case '**':
        return Number(a1) ** Number(b1);
    default:
        break;

    }
    throw new Error("Invalid operator");

}

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category math
 * @param {string} b1 The second number in an addition.
 * @returns {number|any} Returns the total.
 * @example
 *
 * convert(1)
 *=> 1
 */
function convert (b1) {

    if ((/^(-\d{1,})$/).test(b1)) {

        return Number(b1);

    }

    if ((/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(b1)) {

        return Number(b1.replace(/%/g, "")/ oneHundred);

    }

    if ((/^(\d{1,})!$/).test(b1)) {

        const value = Number(b1.replace(/!/g, ""));

        let inc = one;

        for (let vv = one; vv <= value;) {

            inc *= vv;
            vv+=one;

        }

        return inc;

    }

    if ((/^|(\d{1,})|$/).test(b1)) {

        return Math.abs(b1);

    }

    return b1;

}

/**
 * Define the formula represented in algebra
 *
 * @since 1.4.9
 * @category Math
 * @param {string} formula The second number in an addition.
 * @returns {boolean|any} Returns the total.
 * @example
 *
 * algbraicExpr("1+1")
 *=> 1
 */
function algbraicExpr (formula) {

    // Handle formula like this 3√s2
    formula = formula.replace(/(\d{0,})\u221A([a-zA-Z0-9_-]{1,})/gu, function (mm, m1, m2) {

        let power = two;

        if (m1 !== "") {

            power = m1;

        }

        // eslint-disable-next-line no-mixed-operators, no-extra-parens
        return "("+m2+"**"+(one/power)+")";

    });

    // Handle formula like this 3x
    formula = formula.replace(/\b([0-9]+[.]{0,1}[0-9]{0,})([a-zA-Z]{1,}[0-9]{0,})\b/g, "($1 * $2)");

    // Handle formula like this (1)(2)
    formula = formula.replace(/\b(\)\s*\()\b/g, ") * (");

    // Handle formula like this 100-10%

    formula = formula.replace(/([a-zA-Z0-9]+)\s*([*\-+x])\s*([a-zA-Z0-9]+)%/g, "($1$2($1*($3/$1)))");

    return formula;

}
export default calculate;

