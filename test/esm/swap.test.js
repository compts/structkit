import {swap} from "../../dist/esm/node.esm";
import assert from 'assert';
const zero = 0;
const two =2;


describe('ESM: swap method', function () {

    it('check if swap', function () {

        assert.deepStrictEqual(swap(zero, two, "foo"), "oof");

    });


});
