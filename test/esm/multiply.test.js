import {multiply} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;

describe('ESM: multiply method', function () {

    it('check if multiply result', function () {

        assert.deepStrictEqual(multiply(one, one), one);

    });
    it('check if multiply result using curry', function () {

        assert.deepStrictEqual(multiply(one)(one), one);

    });

});