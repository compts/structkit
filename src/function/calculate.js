const count = require('./count');
const getKey = require("./getKey");

const getTypeof = require("./getTypeof");
const toArray = require("./toArray");
const {zero, one, two, three, four, oneHundred} = require("../core/defaultValue");

/**
 * Logic in convert string or number to compute
 *
 * @since 1.4.8
 * @category Seq
 * @param {string} formula The second number in an addition.
 * @param {any=} args The second number in an addition.
 * @returns {boolean|any} Returns the total.
 * @example
 *
 * calculate('1+1')
 *=> 2
 */
function calculate (formula, args) {

    const typeofs=getTypeof(args);

    if (typeofs === "json") {

        const argsKey = new RegExp("\\b("+toArray(getKey(args)).join("|")+")\\b", "g");

        formula = formula.replace(argsKey, function (mm, m1) {

            return args[m1];

        });

    }


    const strFormula = formula.replace(/\((.*?)\)/, function (mm, m1) {

        return compute(m1);

    });

    return parseFloat(compute(strFormula));

}

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Seq
 * @param {string} formula The second number in an addition.
 * @returns {boolean|any} Returns the total.
 * @example
 *
 * calculate(/(\d)/g, 0,1)
 *=> 1
 */
function compute (formula) {

    const regexpNumber = /([\d]+!|[\d.%]+|[//*\-+\x^]|\|[\d]+\|)/g;
    let matches = formula.match(regexpNumber);
    const limit = 3;

    if (count(matches) === one) {

        matches = formula.match(/([\d]+|[%])/g);

        if (count(matches) === one) {

            return convert(matches[zero], zero, "right");

        }

    }
    if (count(matches) === two) {

        if (matches[zero] === "-") {

            return convert(matches.join(""), zero, "right");

        }

    }

    if (count(matches) < limit) {

        throw new Error("Invalid formula");

    }

    let counter = zero;
    let result = 0;

    for (let ii = zero; ii<Math.ceil(count(matches)/limit); ii +=one) {

        if (ii === zero) {

            result = process(convert(matches[zero], matches[two], "right"), matches[one], convert(matches[zero], matches[two], "left"));

        } else {

            if (count(matches) > counter + four) {

                result = process(convert(result, matches[counter + four], "right"), matches[counter + three], convert(result, matches[counter + four], "left"));
                counter += two;

            }

        }

    }

    return parseFloat(result);

}

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Seq
 * @param {number} a1 The second number in an addition.
 * @param {string} operator The second number in an addition.
 * @param {number} b1 The second number in an addition.
 * @returns {number|any} Returns the total.
 * @example
 *
 * calculate(/(\d)/g, 0,1)
 *=> 1
 */
function process (a1, operator, b1) {

    switch (operator) {

    case '+':
        return parseFloat(a1) + parseFloat(b1);
    case '-':
        return parseFloat(a1) - parseFloat(b1);
    case 'x':
    case '*':
        return parseFloat(a1) * parseFloat(b1);
    case '/':
        return parseFloat(a1) / parseFloat(b1);
    case '%':
        return parseInt(a1) % parseInt(b1);
    case '^':
        return parseFloat(a1) ** parseFloat(b1);
    default:
        break;

    }
    throw new Error("Invalid operator");

}

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Seq
 * @param {number} a1 The second number in an addition.
 * @param {string} b1 The second number in an addition.
 * @param {string} pos The second number in an addition.
 * @returns {number|any} Returns the total.
 * @example
 *
 * calculate(/(\d)/g, 0,1)
 *=> 1
 */
function convert (a1, b1, pos) {

    if ((/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(b1) && (/^(\d{1,}|\d{1,}\.\d{1,})$/).test(a1) && pos ==="left") {

        return parseFloat(a1) * parseFloat(b1.replace(/%/g, "")/ oneHundred);

    }

    if ((/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(b1) && (/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(a1)) {

        if (pos === "right") {

            return parseFloat(a1.replace(/%/g, "")/ oneHundred);

        }

        if (pos === "left") {

            return parseFloat(b1.replace(/%/g, "")/ oneHundred);

        }

    }

    if ((/^(\d{1,})!$/).test(b1) || (/^(\d{1,})!$/).test(a1)) {

        let value = 1;

        if (pos === "right") {

            value = parseInt(a1.replace(/!/g, ""));

        }

        if (pos === "left") {

            value = parseInt(b1.replace(/!/g, ""));

        }

        let inc = 1;

        for (let vv = one; vv <= value;) {

            inc *= vv;
            vv+=one;

        }

        return inc;

    }

    if ((/^|(\d{1,})|$/).test(b1) || (/^|(\d{1,})|$/).test(a1)) {

        if (pos === "right") {

            return Math.abs(a1);

        }

        if (pos === "left") {

            return Math.abs(b1);

        }

    }

    if (pos === "right") {

        return a1;

    }

    return b1;

}
module.exports=calculate;
