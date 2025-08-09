/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

import {curry, isFunction} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;
const two = 2;

function test () {

    return true;

}

function test1 (_arg) {

    return true;

}

describe('ESM: curry method', function () {

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
