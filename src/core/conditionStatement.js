/*
 * Const count = require('../function/count');
 * const getTypeof = require('../function/getTypeof');
 */

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
function statementAction (types, initialValue) {

    this.types = types;
    this.initialValue = initialValue;

}

statementAction.prototype.valueOfStatement = function (value) {

    console.log(value, ":value");
    if (this.types === "eq") {

        return this.initialValue === value;

    }

    if (this.types === "neq") {

        return this.initialValue !== value;

    }

    if (this.types === "lt") {

        return this.initialValue > value;

    }

    if (this.types === "lte") {

        return this.initialValue >= value;

    }

    if (this.types === "gt") {

        return this.initialValue > value;

    }

    if (this.types === "gte") {

        return this.initialValue >= value;

    }

    return false;

};

module.exports=statementAction;
