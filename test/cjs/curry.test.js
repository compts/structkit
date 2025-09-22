/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
const {curry, isFunction, equal, subtract} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two = 2;
const three = 3;
const four = 3;

function test () {

    return true;

}

function test1 (_arg) {

    return true;

}

const subCurry1 = equal(subtract(four));

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

    it('check if curry with sub curry with no param type function', function () {

        assert.strictEqual(typeof subCurry1, "function");

    });
    it('check if curry with sub curry with one param type boolean', function () {

        assert.strictEqual(typeof subCurry1(one), "boolean");

    });

});
