/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
const {curry, isFunction} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two = 2;

function test () {

    return true;

}

function test1 (_arg) {

    return true;

}

describe('CJS: curry method', function () {

    it('check if curry return true', function () {

        assert.deepStrictEqual(curry(test), true);

    });

    it('check if curry return function', function () {

        assert.strictEqual(isFunction(curry(test1)), isFunction(test1));

    });

    it('check if curry with argument pass return boolean', function () {

        const callF = curry(test1);

        assert.strictEqual(callF(""), test1(""));

    });

});
