/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

import {curry, isFunction, equal, subtract} from "../../dist/esm/node.esm.js";
import assert from 'assert';

const zero = 0;
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

    it('check if curry with two param type number return boolean', function () {

        assert.strictEqual(typeof equal(curry(subtract)(two, one))(zero), "boolean");
        assert.strictEqual(typeof equal(curry(subtract)(two)(one))(zero), "boolean");

    });

    it('check if curry with sub curry with no param type function', function () {

        assert.strictEqual(typeof subCurry1, "function");

    });
    it('check if curry with sub curry with one param type boolean', function () {

        assert.strictEqual(typeof subCurry1(one), "boolean");

    });

    it('check if curry with sub curry with one param return false', function () {

        assert.strictEqual(typeof subCurry1(one), "boolean");

    });

});
