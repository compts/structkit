const count = require('../function/count');

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Seq
 * @param {string} formula The second number in an addition.
 * @param {any[]} args The second number in an addition.
 * @returns {boolean|any} Returns the total.
 * @example
 *
 * calculate(/(\d)/g, 0,1)
 *=> 1
 */
function calculate (formula, args) {

    const strFormula = formula.replace(/\((.*?)\)/, function (m, m1) {

        return compute(m1, args);

    });

    return parseFloat(compute(strFormula, args));

}

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Seq
 * @param {string} formula The second number in an addition.
 * @param {any[]} args The second number in an addition.
 * @returns {boolean|any} Returns the total.
 * @example
 *
 * calculate(/(\d)/g, 0,1)
 *=> 1
 */
function compute (formula, args) {

    const regexpNumber = /([\d]+!|[\d.%]+|[//*\-+\x])/g;
    let matches = formula.match(regexpNumber);
    const limit = 3;
    const zero = 0;
    const one = 1;

    console.log(matches);
    if (count(matches) === one) {

        matches = formula.match(/([\d]+|[%])/g);

        if (count(matches) === one) {

            return convert(matches[0], zero, "right");

        }

    }

    if (count(matches) < limit) {

        throw new Error("Invalid formula");

    }

    let counter = zero;
    let result = 0;

    for (let ii = zero; ii<Math.ceil(count(matches)/limit); ii +=one) {

        if (ii === zero) {

            result = process(convert(matches[0], matches[2], "right"), matches[1], convert(matches[0], matches[2], "left"));

        } else {

            if (count(matches) > counter + 4 ) {

                result = process(convert(result, matches[counter + 4], "right"), matches[counter + 3], convert(result, matches[counter + 4], "left"));
                counter += 2;

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

        return parseFloat(a1) * parseFloat(b1.replace(/%/g, "")/ 100);

    }

    if ((/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(b1) && (/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(a1)) {

        if (pos === "right") {

            return parseFloat(a1.replace(/%/g, "")/ 100);

        }

        if (pos === "left") {

            return parseFloat(b1.replace(/%/g, "")/ 100);

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

        const one = 1;

        for (let vv = one; vv <= value;) {

            inc *= vv;
            vv+=one;

        }

        return inc;

    }

    if (pos === "right") {

        return a1;

    }

    return b1;

}
module.exports=calculate;
